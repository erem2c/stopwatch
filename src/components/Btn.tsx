import '../App.css';

interface Props {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onLap: () => void;
  isRunning: boolean;
}

export const Btns: React.FC<Props> = ({ onStart, onStop, onReset, onLap, isRunning }) => {
  return (
    <div className="buttons">
      {!isRunning ? (
        <button className="btn" onClick={onStart}>Start</button>
      ) : (
        <button className="btn" onClick={onStop} disabled={!isRunning}>Stop</button>
      )}
      <button className="btn" onClick={onReset}>Reset</button>
      <button className="btn" onClick={onLap}>Lap</button>
    </div>
  );
};
