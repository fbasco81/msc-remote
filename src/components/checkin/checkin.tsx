import React from 'react';
import './checkin.css';
import { Fab } from '@mui/material';
import { getCurrentCetTime } from '../../utils/time';
import { endpoint } from '../../utils/url';
import { buildRequestOptions } from '../../utils/request';
import { ICheckButtonProps } from '../../types/ICheckButtonProps';
import LoginIcon from '@mui/icons-material/Login';

function CheckIn(props: ICheckButtonProps) {

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
    <Fab variant="extended" onClick={checkIn}>
          <LoginIcon />
          Begin your day
        </Fab>
    
    );
}

export default CheckIn;
