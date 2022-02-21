import React from 'react';
import './checkout.css';
import { Fab } from '@mui/material';
import { CheckButtonProps } from '../ButtonProps';
import { getCurrentCetTime } from '../../utils/time';
import { endpoint } from '../../utils/url';
import { buildRequestOptions } from '../../utils/request';

function CheckOut(props: CheckButtonProps) {

  const checkOut = async() => {
    const time = getCurrentCetTime();

    const requestOptions = buildRequestOptions(props, time);
  
    fetch(endpoint, requestOptions)
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
