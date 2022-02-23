import React from 'react';
import './checkout.css';
import { Fab } from '@mui/material';
import { getCurrentCetTime } from '../../utils/time';
import { endpoint } from '../../utils/url';
import { buildRequestOptions } from '../../utils/request';
import { ICheckButtonProps } from '../../types/ICheckButtonProps';
import LogoutIcon from '@mui/icons-material/Logout';
function CheckOut(props: ICheckButtonProps) {

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
    <Fab variant="extended" onClick={checkOut}>
          <LogoutIcon />
          End your day
        </Fab>
      
    );
}

export default CheckOut;
