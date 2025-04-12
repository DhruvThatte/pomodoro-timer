import React from "react";

function controls ({isRunning , toggleRunning , resetTimer}){
    return (
        <div style = {{marginTop : '20px'}}>
            <button onClick={toggleRunning}>{isRunning ? 'Pause' : 'Start'}</button>
            <button onClick={resetTimer} style={{marginLeft : '10px'}}>Reset</button>
        </div>
    );
}

export default controls;