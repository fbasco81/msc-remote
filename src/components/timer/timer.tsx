import React, { useState } from 'react';
import './timer.css';
import { getCurrentCetTime } from '../../utils/time';
import { ITimerProps } from '../../types/ITimerProps';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
function Timer(props: ITimerProps) {

  const [currentTime, setCurrentTime] = useState(getCurrentCetTime().format("HH:mm"));

  
  const duration = moment.duration(
    (checkOutMoment.isValid() ? checkOutMoment : getCurrentCetTime()).diff(
      checkInMoment
    )
  );
  // elapsedHours: duration.hours().toString(),
  // elapsedMinutes: duration.minutes().toString(),


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
    <br />
    (elapsed: {props.elapsedHours} hours and {props.elapsedMinutes} minutes)
    </div>);
}

export default Timer;
