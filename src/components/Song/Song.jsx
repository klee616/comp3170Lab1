import { useState, useEffect } from "react";
import './Song.css'

export default function Song({song}){
    return (<><li><span className="song-name">{song}</span></li></>)
}