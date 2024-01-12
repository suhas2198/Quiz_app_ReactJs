import React, { useRef } from "react";
import "../../components/Start/start.css"

export default function Start({setUserName}) {

    const inputRef =useRef()

    const handleClick=()=>{
       inputRef.current.value && setUserName(inputRef.current.value)
    }
  return (
    <div className="start">
      <input placeholder="Enter your name" className="startInput" ref={inputRef}>
        
      </input>
      <button className="startButton" onClick={handleClick}>Start</button>
    </div>
  );
}
