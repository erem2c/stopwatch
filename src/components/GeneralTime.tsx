import  { useState, useEffect } from 'react';
import '../App.css';
import {Table} from "./Table.tsx";



export const GeneralTime =()=> {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [lapTime, setLapTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const [score, setScore] = useState<string[]>([]);

  useEffect(() => {
    return () => clearInterval(intervalId as number);
  }, [intervalId]);

  const formatTime = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const millisecondsStr = Math.floor(date.getMilliseconds() / 10)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}:${millisecondsStr}`;
  };

  const startStopwatch = () => {
    const id = setInterval(() => {
      setTotalTime(prevTime => prevTime + 100);
      setLapTime(prevTime => prevTime + 100);
    }, 100);
    setIntervalId(id);
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    clearInterval(intervalId as number);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    // clearInterval(intervalId as number);
    setTotalTime(0);
    setLapTime(0);
    setScore([]);
    setIsRunning(false);
  };

  const resetLapTimeAndAddScore = () => {
    setScore([...score, formatTime(lapTime)]);
    setLapTime(0);
    console.log(score);
  }


  return (
    <div className="stopwatch">
      <div className="timeBox">
        <div className="time-display">
          <span className="time-display-span">Total Time: {formatTime(totalTime)}</span>
        </div>

        <div className="time-display">
          <span className="time-display-span">Lap Time: {formatTime(lapTime)} </span>
        </div>
      </div>


      <div className="buttons">
        {!isRunning ? (
          <button className="btn" onClick={startStopwatch}>Start</button>
        ) : (
          <button className="btn" onClick={stopStopwatch}>Stop</button>
        )}
        <button className="btn" onClick={resetStopwatch}>Reset</button>

        <button className="btn" onClick={resetLapTimeAndAddScore}>Lap</button>
      
      </div>
      {score.length > 0 && <Table lapScore={score}/>}
    </div>
  );
}


