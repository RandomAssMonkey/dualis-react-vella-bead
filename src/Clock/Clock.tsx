import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());
    const [tooltipText, setTooltipText] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = time.getHours() % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const hourRotation = ((hour * 30) + (minute / 2)); // 30 degrees per hour, 0.5 degrees per minute
    const minuteRotation = ((minute * 6) + (second / 10)); // 6 degrees per minute, 0.1 degrees per second
    const secondRotation = second * 6; // 6 degrees per second

    const handleMouseOver = () => {
        const formattedTime = time.toLocaleTimeString();
        setTooltipText(formattedTime);
    };

    const handleMouseOut = () => {
        setTooltipText('');
    };

    return (
        <div className="clock" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="hour-hand" style={{ transform: `rotate(${hourRotation}deg)` }}></div>
            <div className="minute-hand" style={{ transform: `rotate(${minuteRotation}deg)` }}></div>
            <div className="second-hand" style={{ transform: `rotate(${secondRotation}deg)` }}></div>
            {tooltipText && <div className="tooltip">{tooltipText}</div>}
        </div>
    );
};

export default Clock;
