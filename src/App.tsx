import React, { useState } from "react";
import "./App.css";
import { Box, Fab, Grid } from "@mui/material";
import CheckOut from "./components/checkout/checkout";
import CheckIn from "./components/checkin/checkin";
import { ICheckButtonProps } from "./types/ICheckButtonProps";
import Registration from "./components/registration/registration";
import { IRegistrationProps } from "./types/IRegistrationProps";
import { IUser } from "./types/IUser";
import { INotify } from "./types/INotify";
import EditIcon from "@mui/icons-material/Edit";
import Timer from "./components/timer/timer";
import { ITimerProps } from "./types/ITimerProps";
import {
  getCheckInCheckoutData,
  getUserData,
  getNotifyData,
  setCheckInCheckOutData,
} from "./utils/storage";
import moment from "moment";
import { getCurrentCetTime } from "./utils/time";

function App() {
  const isDataMissing =
    !localStorage.getItem("user") || !localStorage.getItem("user");

  let checkInCheckout = getCheckInCheckoutData();
  const dateFormat = "DD/MM/YYYY HH:mm";
  const [checkInTime, setCheckInTime] = useState(checkInCheckout.start);
  const [checkOutTime, setCheckOutTime] = useState(checkInCheckout.end);
  const [isRegistrationVisible, setIsRegistrationVisible] =
    useState(isDataMissing);
  
  const checkInMoment = moment(checkInTime, dateFormat);
  const checkOutMoment = moment(checkOutTime, dateFormat);

  const registrationProps: IRegistrationProps = {
    user: getUserData(),
    notify: getNotifyData(),
    onConfirm: (user: IUser, notify: INotify) => {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("notify", JSON.stringify(notify));
      setIsRegistrationVisible(false);
    },
  };

  const checkInButtonProps: ICheckButtonProps = {
    username: registrationProps.user.email,
    to: registrationProps.notify.to,
    cc: registrationProps.notify.cc,
    fullName:
      registrationProps.user.name + " " + registrationProps.user.surname,
    onSuccess: (time) => {
      setCheckInTime(time.format(dateFormat));
      setCheckOutTime("");
      setCheckInCheckOutData({ start: time.format(dateFormat), end: "" });
    },
    onFailure: () => {
      alert("error");
    },
    type: "[IN]",
  };

  const timerProps: ITimerProps = {
    checkIn: checkInMoment,
    checkOut: checkOutMoment,
  };
  const checkOutButtonProps: ICheckButtonProps = {
    username: registrationProps.user.email,
    to: registrationProps.notify.to,
    cc: registrationProps.notify.cc,
    fullName:
      registrationProps.user.name + " " + registrationProps.user.surname,
    onSuccess: (time) => {
      setCheckOutTime(time.format(dateFormat));
      setCheckInCheckOutData({
        ...checkInCheckout,
        ...{ end: time.format(dateFormat) },
      });
    },
    onFailure: () => {
      alert("error");
    },
    type: "[OUT]",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: "center" }} className="header">
          Be ready to live an unforgettable experience
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }} className="checkIn">
          {checkInMoment.isValid() ? (
            <>
              {" "}
              Last check in done at <br />
              {checkInTime}
            </>
          ) : (
            ""
          )}
          <br />
          <CheckIn {...checkInButtonProps}></CheckIn>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }}>
          <Timer {...timerProps}></Timer>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }} className="checkOut">
          {checkOutMoment.isValid() ? (
            <>
              Last check out done at <br />
              {checkOutTime}
            </>
          ) : (
            ""
          )}
          <br />
          <CheckOut {...checkOutButtonProps}></CheckOut>
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        aria-label="edit"
        className="registrationButton"
        onClick={() => setIsRegistrationVisible(true)}
      >
        <EditIcon />
      </Fab>

      {isRegistrationVisible ? (
        <Registration {...registrationProps}></Registration>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default App;
