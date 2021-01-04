import React, { ReactElement } from 'react';

const MusicPlayer: React.FC = (): ReactElement=> {

  return(
    <div className="container">
      <div className="header"></div>
      <div className="player"></div>
      <div className="music-info"></div>
      <div className="player-options"></div>
    </div>
  )
} 

export default MusicPlayer
