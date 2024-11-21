import React, { useState, useEffect, useRef} from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const renders = useRef(0);

useEffect(() => {
    let interval;
    if(isRunning) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    }
    return () => clearInterval(interval);
}, [isRunning]);

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds/60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

const togglePlayPause = () => {
    setIsRunning(!isRunning);
};

const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
};

renders.current += 1;

return (
    <div className="container">
        <div className="timer">
           <h2>{formatTime(time)}</h2>
           <p>Number of component renders: {renders.current}</p>
        </div>
        <div className="buttons">
            <button onClick={togglePlayPause} className={`timer-button ${isRunning ? 'pause' : 'play'}`}> {isRunning ? 'Pause' : 'Play'}</button>
            <button className="reset" onClick={resetTimer}>Reset</button>
        </div>
    </div>
)

}


export default Timer;