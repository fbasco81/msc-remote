import React, { useState } from 'react';
import './timer.css';
import { Fab } from '@mui/material';
import { getCurrentCetTime } from '../../utils/time';
import { ITimerProps } from '../../types/ITimerProps';
function Timer(props: ITimerProps) {

  const [currentTime, setCurrentTime] = useState("");

  setInterval(() => {
    const time = getCurrentCetTime();
    setCurrentTime(time);
  }, 20000);

  return (
    <>
    {currentTime}
    </>);
}

export default Timer;
