import './App.css'
import { useState, useEffect } from "react";
import artist from './data/artist.json';
import Album from './components/Album/Album'

function App() {
  const [data, setData] = useState([...artist]);
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>ABBA</h1>
        </div>
        <div className="artist">
          <img src="ABBA.jpg" className='artist-image' alt='ABBA' />
        </div>
        <div className="album">
          ABBA's Album
          <Album albums={data} />
        </div >
      </div>
    </>
  )
}

export default App
