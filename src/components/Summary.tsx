import '../App.css';
import {useEffect, useState} from "react";

type Props = {
    lapScore: string[]
}
export const Summary = ( {lapScore}:Props) => {
    const [laps, setLaps] = useState<string[]>([]);

    useEffect(() => {
        setLaps(lapScore)
    }, [lapScore]);
    
    return (
      <>
      <h1 className='summary-h1'>Podsumowanie</h1>
      <table className='summary-table'>
          <tbody>
            <tr><th>Total lap time</th><td></td></tr>
            <tr><th>Average lap time</th><td></td></tr>
            <tr><th>Fastest lap</th><td></td></tr>
            <tr><th>Slowest lap</th><td></td></tr>
            <tr><th>Total laps</th><td>{laps}</td></tr>
          </tbody>
        </table>
      </>
    );
}
