import React, { useState } from 'react';
import sound1 from '../sounds/alarm-1.wav';
import './mainpage.css';
import { Button, Input } from '@chakra-ui/react'
import CountdownTimer from '../components/CountdownTimer';

const MainPage = () => {
  let counter = 0;
  const audio1 = new Audio(sound1);

  const [timeValue, setTimeValue] = useState(0);
  const [repeatValue, setRepeatValue] = useState(0);
  const [dateTime, setDateTime] = useState(0);

  const timeSetter = (e) => {
    setTimeValue(e.target.value);
  }

  const repeatSetter = (e) => {
    setRepeatValue(e.target.value);
  }

  const playSound = () => {
    audio1.play();
  };

  const playInterval = () => {
    console.log("click")
    setDateTime(new Date().getTime() + (timeValue * 60000));
    const intervalId = setInterval(() => {
      playSound();
      counter++;
      setDateTime(new Date().getTime() + (timeValue * 60000));
      if (counter >= repeatValue) {
        clearInterval(intervalId);
        counter = 0;
      }
    }, (timeValue * 60000));
  }

  return (
    <div>
      <div className='content'>
        <h1>TYMR</h1>
        <div className='timer'>
          <CountdownTimer targetDate={dateTime} />
        </div>
        <div className='inputs'>
          <Input onChange={timeSetter} variant='filled' type='number' placeholder='Time' />
          <Input onChange={repeatSetter} variant='filled' type='number' placeholder='Repeats' />
        </div>
        {(timeValue > 0 && repeatValue > 0) && (
          <Button colorScheme='blue' onClick={() => playInterval(2)}>Start</Button>
        )}
        {!(timeValue > 0 && repeatValue > 0) && (
          <Button colorScheme='blue' disabled>Start</Button>
        )}
      </div>
    </div>

  );
};

export default MainPage;
