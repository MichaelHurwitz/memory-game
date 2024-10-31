import React, { useEffect, useState } from 'react';
import './Timer.css';

interface Props {
  timeLimit: number;
  resetGame: () => void;
}

const Timer: React.FC<Props> = ({ timeLimit, resetGame }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    setTimeLeft(timeLimit); // מאתחל את הזמן בכל פעם שהמשחק מתאפס

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert('Time is up!');
          resetGame();
          return timeLimit;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimit, resetGame]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <div className="timer">Time Left: {formatTime(timeLeft)}</div>;
};

export default Timer;
