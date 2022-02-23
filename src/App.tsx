import React, { useState } from "react";
import "./App.css";
import { Fab, Grid, Stack } from "@mui/material";
import CheckOut from "./components/checkout/checkout";
import CheckIn from "./components/checkin/checkin";
import { ICheckButtonProps } from "./types/ICheckButtonProps";
import Registration from "./components/registration/registration";
import { IRegistrationProps } from "./types/IRegistrationProps";
import { IUser } from "./types/IUser";
import { INotify } from "./types/INotify";
import EditIcon from '@mui/icons-material/Edit';
import LoginIcon from '@mui/icons-material/Login';
import Timer from "./components/timer/timer";
import { ITimerProps } from "./types/ITimerProps";
function App() {

  const isDataMissing = !localStorage.getItem('user') || !localStorage.getItem('user');

  const [isCheckInVisible, setIsCheckInVisible] = useState(true);
  const [isCheckOutVisible, setIsCheckOutVisible] = useState(true);
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(isDataMissing);

  
  const registrationProps: IRegistrationProps = {
    user: {
      department: "",
      email: "",
      name: "",
      surname: "" 
    },
    notify: {
      bcc: "",
      cc: "",
      to: ""
    },
    onConfirm: (user: IUser, notify: INotify) => {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('notify', JSON.stringify(notify));
      setIsRegistrationVisible(false);
    }
  }

  if (localStorage.getItem('user')){
    registrationProps.user = JSON.parse(localStorage.getItem('user') as string);
  }

  if (localStorage.getItem('notify')){
    registrationProps.notify = JSON.parse(localStorage.getItem('notify') as string);
  }

  const checkInButtonProps: ICheckButtonProps = {
    username: "francesco.basco@msc.com",
    to: "fbasco81@gmail.com",
    cc: "francesco.basco@msc.com",
    fullName: "Francesco Basco",
    onSuccess: () => {
      setIsCheckInVisible(false);
    },
    onFailure: () => {
      alert("error");
    },
    type: "[IN]"
  };

  const timerProps: ITimerProps = {};
  const checkOutButtonProps: ICheckButtonProps = {
    username: "francesco.basco@msc.com",
    to: "fbasco81@gmail.com",
    cc: "francesco.basco@msc.com",
    fullName: "Francesco Basco",
    onSuccess: () => {
      setIsCheckOutVisible(false);
    },
    onFailure: () => {
      alert("error");
    },
    type: "[OUT]"

  }; 

  
  return (
    <div className="App">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          Header
        </Grid>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          { isCheckInVisible ? <CheckIn {...checkInButtonProps}></CheckIn> : <span>Check in done</span>}
           <Timer {...timerProps}></Timer>
          { isCheckOutVisible ? <CheckOut {...checkOutButtonProps}></CheckOut> : <span>Check out done</span>}
        </Stack>
        { isRegistrationVisible ? <Registration {...registrationProps}></Registration> : <></>}

        <Fab color="secondary" aria-label="edit" onClick={() => setIsRegistrationVisible(true)}>
          <EditIcon />
        </Fab>
      </Grid>
    </div>
  );
}

export default App;
