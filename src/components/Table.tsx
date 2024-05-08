import '../App.css';
import {useState} from "react";

export const Table = () => {

    const [laps, setLaps] = useState([
        { lapNumber: 1, lapTime: '00:05:30' },
        { lapNumber: 2, lapTime: '00:05:20' },
        { lapNumber: 3, lapTime: '00:05:25' },
        { lapNumber: 3, lapTime: '00:05:25' },
        { lapNumber: 3, lapTime: '00:05:25' },
    ]);

    return (
        <div className={"run-table"}>
            <h2>Runner Lap Times</h2>
            <table className="laps-table">
                <thead>
                <tr>
                    <th>Lap Number</th>
                    <th>Lap Time</th>
                </tr>
                </thead>
                <tbody>
                {laps.map((lap, index) => (
                    <tr key={index}>
                        <td>{lap.lapNumber}</td>
                        <td>{lap.lapTime}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}