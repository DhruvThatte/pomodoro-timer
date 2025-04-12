import React from "react";

function timer ({ timeLeft,isBreak}){
    const formatTime = (seconds)=>{
        const min = String(Math.floor(seconds/60)).padStart(2,'0');
        const sec = String(seconds%60).padStart(2,'0');
        return `${min}:${sec}`;
    };

    return (
        <div>
            <h2>{isBreak ? 'Break Time' : 'Work Time'}</h2>
            <h1 style ={{fontSize : '4rem'}}>{formatTime(timeLeft)}</h1>
        </div>
    );
}
export default timer;