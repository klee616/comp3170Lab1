import './Album.css'
import { useState, useEffect } from "react";
import Song from '../Song/Song'

export default function Album({ albums }) {
    return (<>
        <ul className="album-list">
            {albums && albums.map((album) => {
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
                                    return (<>
                                        <Song song={song} />
                                    </>)
                                })}
                            </ul>
                        </li>
                    </>
                )
            })}

        </ul>
    </>)
}