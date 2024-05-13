import '../App.css';
import { useEffect, useState } from "react";

type LapData = {
    formattedTime: string;
    lapTime: number;
}

type Props = {
    lapScore: LapData[];
}

export const Summary = ({ lapScore }: Props) => {
    const [laps, setLaps] = useState<LapData[]>([]);

    useEffect(() => {
        setLaps(lapScore);
    }, [lapScore]);

    const getTotalLapTime = (): string => {
        const totalMilliseconds = laps.reduce((total, lap) => total + lap.lapTime, 0);
        return formatTime(totalMilliseconds);
    };

    const getAverageLapTime = (): string => {
        const totalMilliseconds = laps.reduce((total, lap) => total + lap.lapTime, 0);
        const averageMilliseconds = totalMilliseconds / laps.length;
        return formatTime(averageMilliseconds);
    };

    const getFastestLap = (): string => {
        const fastestLap = Math.min(...laps.map(lap => lap.lapTime));
        return formatTime(fastestLap);
    };

    const getSlowestLap = (): string => {
        const slowestLap = Math.max(...laps.map(lap => lap.lapTime));
        return formatTime(slowestLap);
    };

    const formatTime = (milliseconds: number): string => {
        const date = new Date(milliseconds);
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const millisecondsStr = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
        return `${minutes}:${seconds}:${millisecondsStr}`;
    };

    return (
        <>
            <h1 className='summary-h1'>Podsumowanie</h1>
            <table className='summary-table'>
                <tbody>
                    <tr>
                        <th>Total lap time</th>
                        <td>{getTotalLapTime()}</td>
                    </tr>
                    <tr>
                        <th>Average lap time</th>
                        <td>{getAverageLapTime()}</td>
                    </tr>
                    <tr>
                        <th>Fastest lap</th>
                        <td>{getFastestLap()}</td>
                    </tr>
                    <tr>
                        <th>Slowest lap</th>
                        <td>{getSlowestLap()}</td>
                    </tr>
                    <tr>
                        <th>Total laps</th>
                        <td>{laps.length}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
