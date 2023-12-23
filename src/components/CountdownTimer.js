import React from 'react';
import DateTimeDisplay from './dateTimeDisplay';
import { useCountdown } from './useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="show-counter">
      <a
        href=""
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value="0" type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value="0" type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value="0" type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href=""
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
