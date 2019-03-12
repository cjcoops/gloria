import React from 'react'
import BandCamp from '../assets/svg/Bandcamp-button-bc-circle-white.svg'
import Insta from '../assets/svg/iconmonstr-instagram-11.svg'
import ITunes from '../assets/svg/iTunes_Store_icon_wht.svg'
import spotify from '../images/Spotify_Icon_RGB_White.png'

import classes from './socials.module.css'

console.log(classes)

const Socials = () => (
  <div className={classes.socialsContainer}>
    <div className={classes.iconContainer}>
      <BandCamp height="40" width="40" />
    </div>
    <div className={classes.iconContainer}>
      <Insta height="40" />
    </div>
    <div className={classes.iconContainer}>
      <ITunes height="40" />
    </div>
    <div className={classes.iconContainer}>
      <img height="40" src={spotify} alt="Spotify" />
    </div>
  </div>
)

export default Socials
