import React, { ReactElement } from 'react';
import './010.css'

const SocialShare: React.FC = (): ReactElement=> {

  return(
    <div className="container">
      <i className="fas fa-share-alt" />
      <i className="fab fa-facebook-f pink" />
      <i className="fab fa-twitter pink" />
      <i className="fab fa-invision pink" />
      <i className="fab fa-google-plus-g pink" />
      <i className="far fa-times-circle" />
    </div>
  )
} 

export default SocialShare
