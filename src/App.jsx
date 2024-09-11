import './App.css'
import { useState, useEffect } from "react";
import artist from './data/artist.json';

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
          <ul className="album-list">
            {data && data.map((album) => {
              const [isShow, setIsShow] = useState(false)

              function showSongList() {
                setIsShow(true)
              }
              function closeSongList() {
                setIsShow(false)
              }
              return (
                <>
                  <li>
                    <div className="album-info">
                      <span className='album-name'>{album.album_name}</span>
                      <span onClick={showSongList} style={{ display: isShow == true ? "none" : "inline-block", cursor: "pointer" }}>&#10133;</span>
                      <span onClick={closeSongList} style={{ display: isShow == true ? "inline-block" : "none", cursor: "pointer" }}>&#10134;</span>
                    </div>
                    <ul className="song-list" style={{ display: isShow == true ? "block" : "none" }}>
                      {album.song_list && album.song_list.map((song) => {
                        return (<><li><span className="song-name">{song}</span></li></>)
                      })}
                    </ul>
                  </li>
                </>
              )
            })}

          </ul>
        </div >
      </div>
    </>
  )
}

export default App
