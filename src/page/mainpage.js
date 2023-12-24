import React, { useState } from 'react';
import sound1 from '../sounds/alarm-1.wav';
import sound2 from '../sounds/alarm-2.wav';
import sound3 from '../sounds/alarm-3.wav';
import sound4 from '../sounds/alarm-4.wav';
import sound5 from '../sounds/alarm-5.mp3';
import sound6 from '../sounds/alarm-6.mp3';
import './mainpage.css';
import { Button, Input } from '@chakra-ui/react'
import CountdownTimer from '../components/CountdownTimer';
import Select from 'react-select';

const MainPage = () => {
  let counter = 0;
  const sounds = [
    { label: 'Alarm 1', sound: sound1 },
    { label: 'Alarm 2', sound: sound2 },
    { label: 'Alarm 3', sound: sound3 },
    { label: 'Alarm 4', sound: sound4 },
    { label: 'Alarm 5', sound: sound5 },
    { label: 'Pau-Pau Special', sound: sound6 },
  ];

  const [timeValue, setTimeValue] = useState(0);
  const [repeatValue, setRepeatValue] = useState(0);
  const [dateTime, setDateTime] = useState(0);
  const [selectedSound, setSelectedSound] = useState(sounds[0]);
  const audio = new Audio(selectedSound.sound);
  audio.muted = true;

  const timeSetter = (e) => {
    setTimeValue(e.target.value);
  }

  const repeatSetter = (e) => {
    setRepeatValue(e.target.value);
  }

  const playSound = () => {
    const audio = new Audio(selectedSound.sound);
    audio.muted = false;
    audio.play();
  };

  const playInterval = () => {
    setDateTime(new Date().getTime() + (timeValue * 60000));
    playSound();
    const intervalId = setInterval(() => {
      playSound();
      counter++;
      setDateTime(new Date().getTime() + (timeValue * 60000));
      if (counter >= repeatValue) {
        setDateTime(new Date().getTime() + (0));
        clearInterval(intervalId);
        counter = 0;
      }
    }, (timeValue * 60000));
  }

  const handleSoundChange = (selectedOption) => {
    setSelectedSound(selectedOption);
  };

  return (
    <div>
      <div className='content'>
        <h1>TYMR</h1>
        <div className='select'>
          <Select
            options={sounds}
            defaultValue={sounds[0]}
            onChange={handleSoundChange}
          />
          <Button onClick={playSound}>Test Sound</Button>
        </div>
        <div className='timer'>
          <CountdownTimer targetDate={dateTime} />
        </div>
        <div className='inputs'>
          <Input onChange={timeSetter} variant='filled' type='number' placeholder='Alarm in how many minutes?' />
          <Input onChange={repeatSetter} variant='filled' type='number' placeholder='How many repeats?' />
        </div>
        {(timeValue > 0 && repeatValue > 0) && (
          <Button colorScheme='blue' onClick={() => playInterval(2)}>Start</Button>
        )}
        {!(timeValue > 0 && repeatValue > 0) && (
          <Button isLoading colorScheme='blue' variant='solid'>Start</Button>
        )}
      </div>
    </div>

  );
};

export default MainPage;
