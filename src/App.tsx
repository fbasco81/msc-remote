import React, { useState } from "react";
import "./App.css";
import { Fab, Grid, Stack } from "@mui/material";
import { CheckButtonProps } from "./components/ButtonProps";
import CheckOut from "./components/checkout/checkout";
import CheckIn from "./components/checkin/checkin";

function App() {

  const [isCheckInVisible, setIsCheckInVisible] = useState(true);
  const [isCheckOutVisible, setIsCheckOutVisible] = useState(true);

  const checkInButtonProps: CheckButtonProps = {
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

  const checkOutButtonProps: CheckButtonProps = {
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
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          { isCheckInVisible ? <CheckIn {...checkInButtonProps}></CheckIn> : <span>Check in done</span>}
           
          { isCheckOutVisible ? <CheckOut {...checkOutButtonProps}></CheckOut> : <span>Check out done</span>}
        </Stack>
      </Grid>
    </div>
  );
}

export default App;
