import React, { ReactElement } from 'react';
import './009.css'

const MusicPlayer: React.FC = (): ReactElement=> {

  return(
    <div className="container">
      <div className="header">
        <i> - </i>
        <p>now playing</p>
      </div>
      <div className="player">
        <small>3:48</small>
        <div className="image"></div>
        <input className='input' type="range"/>
      </div>
      <div className="music-info">
        <h2>whatever it takes</h2>
        <small>imagine dragons</small>
      </div>
      <div className="player-options"></div>
    </div>
  )
} 

export default MusicPlayer
