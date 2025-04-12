import React, { useState, useEffect } from 'react';
import Timer from './components/timer';
import Controls from './components/controls';
import './App.css';

function App() {
  const workDuration = 25 * 60; // 25 minutes
  const breakDuration = 5 * 60; // 5 minutes

  const [timeLeft, setTimeLeft] = useState(workDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [theme, setTheme] = useState('dark'); // Light/Dark

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            const nextIsBreak = !isBreak;
            setIsBreak(nextIsBreak);
            return nextIsBreak ? breakDuration : workDuration;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isRunning && interval !== null) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, isBreak]);

  const toggleRunning = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(workDuration);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="box">
        <h1>Pomodoro Timer</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
        <Timer timeLeft={timeLeft} isBreak={isBreak} />
        <Controls
          isRunning={isRunning}
          toggleRunning={toggleRunning}
          resetTimer={resetTimer}
        />
      </div>
    </div>
  );
}

export default App;
