import React from 'react';
import '../App.css';

type LapData = {
  lapTime: number;
  totalTime: number;
  formatTime: (milliseconds: number) => string;
}

export const Counters: React.FC<LapData> = ({ lapTime, totalTime, formatTime }) => {
  return (
    
      <div className="timeBox">
        <div className="time-display">
          <span className="time-display-span">Total Time: {formatTime(totalTime)}</span>
        </div>

        <div className="time-display">
          <span className="time-display-span">Lap Time: {formatTime(lapTime)} </span>
        </div>
      </div>
  );
}
