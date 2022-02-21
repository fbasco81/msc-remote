import React from 'react';
import './checkin.css';
import { Fab } from '@mui/material';
import { CheckButtonProps } from '../ButtonProps';
import { getCurrentCetTime } from '../../utils/time';
import { endpoint } from '../../utils/url';
import { buildRequestOptions } from '../../utils/request';

function CheckIn(props: CheckButtonProps) {

  const checkIn = async() => {
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
            bgcolor: 'green',
            '&:hover': {
              background: "#00FF11",
            },
            boxShadow: 1,
            borderRadius: 10,
            p: 20,
            minWidth: 300,
          }}
          onClick={checkIn}>Check in</Fab>
    );
}

export default CheckIn;
