import React, { Component, useEffect, useRef, useState } from 'react';
import VIDEO from './video.mp4'
const RefEx = ()=>{
    const[play , setPlay]= useState(true)
    const eleRef = useRef();
    
    let videoRef = useRef();
    console.log(videoRef);
    
    useEffect(()=>{
        eleRef.current.style.color="Crimson"
        eleRef.current.inneText="REact Ref"
    })
    let playORpause=()=>{
        if(play == true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
            
        }else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true)
        }
    }
    return (
        <div>
            <h1 ref={eleRef}>RefExample</h1>
            <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
        </div>
    );
}

export default RefEx;
