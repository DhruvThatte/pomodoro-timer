import React from "react";

function controls ({isRunning, toggleRunning, resetTimer, onIncreaseTime, onDecreaseTime}){
    return (
        <div className="controls">
            <div className="time-controls">
                <button onClick={onDecreaseTime} className="time-button">-1 min</button>
                <button onClick={onIncreaseTime} className="time-button">+1 min</button>
            </div>
            <div className="main-controls">
                <button onClick={toggleRunning} className="control-button">{isRunning ? 'Pause' : 'Start'}</button>
                <button onClick={resetTimer} className="control-button">Reset</button>
            </div>
        </div>
    );
}

export default controls;