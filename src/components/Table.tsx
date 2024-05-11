import '../App.css';
import {useEffect, useState} from "react";

type Props = {
    lapScore: string[]
}
export const Table = ( {lapScore}:Props) => {
    const [laps, setLaps] = useState<string[]>([]);

    useEffect(() => {
        setLaps(lapScore)
    }, [lapScore]);

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
                            <td>{index + 1}</td>
                            <td>{lap}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

