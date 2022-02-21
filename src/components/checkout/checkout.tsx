import React from 'react';
import logo from './logo.svg';
import './checkout.css';
import { Fab } from '@mui/material';
import moment from 'moment-timezone';
import { CheckButtonProps } from '../ButtonProps';

function CheckOut(props: CheckButtonProps) {

  const checkOutEndpoint = "https://prod-114.westus.logic.azure.com/workflows/c9cf35a90e2a48a4bb324e98bd18ee7c/triggers/manual/paths/invoke/checkin?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=3k8WTGWzlJQQITKE8F83DlMXugpGiiumfbxIlQkgGK0";
  
  const checkOut = async() => {
    const time = moment().tz("Europe/Rome").format("HH:mm");

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          "from": props.username,
          "to": props.to,
          "cc": props.cc,
          "swType": props.type,
          "name": props.fullName,
          "time": time
        })
    };
  
    fetch(checkOutEndpoint, requestOptions)
      .then(response => {
        props.onSuccess();
      }).catch(err => {
        props.onFailure();
      })

  }

  return (
      <Fab variant="extended" 
      sx={{
        bgcolor: 'red',
        '&:hover': {
          background: "#FF1111",
        },
        boxShadow: 1,
        borderRadius: 10,
        p: 20,
        minWidth: 300,
      }}
      onClick={checkOut}>Check out</Fab>
    );
}

export default CheckOut;
