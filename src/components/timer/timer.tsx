import React, { useState } from 'react';
import './timer.css';
import { getCurrentCetTime } from '../../utils/time';
import { ITimerProps } from '../../types/ITimerProps';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
function Timer(props: ITimerProps) {

  const [currentTime, setCurrentTime] = useState(getCurrentCetTime().format("HH:mm"));

  setInterval(() => {
    const time = getCurrentCetTime();
    setCurrentTime(time.format("HH:mm"));
  }, 20000);

  return (
    <div className='timer'>
    <HistoryToggleOffIcon>
    </HistoryToggleOffIcon>
    <br />
    {currentTime}
    
    </div>);
}

export default Timer;
