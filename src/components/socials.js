import React from 'react'
import BandCamp from '../assets/svg/Bandcamp-button-bc-circle-white.svg'
import Insta from '../assets/svg/iconmonstr-instagram-11.svg'
import ITunes from '../assets/svg/iTunes_Store_icon_wht.svg'
import Spotify from '../assets/svg/icons8-spotify-filled.svg'
import classes from './socials.module.css'

const Socials = () => (
  <div className={classes.socialsContainer}>
    <a
      className={classes.iconContainer}
      href="https://open.spotify.com/track/57Tu62HWKSOImIRgTNulON"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Spotify height="30" style={{ transform: 'scale(1.05)' }} />
    </a>

    <a
      className={classes.iconContainer}
      href="https://itunes.apple.com/gb/album/out/1449715164?i=1449715467&app=music"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ITunes height="30" />
    </a>
    <a
      className={classes.iconContainer}
      href="https://thespectacularempire.bandcamp.com/album/out"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BandCamp height="30" width="30" />
    </a>
    <a
      className={classes.iconContainer}
      href="https://www.instagram.com/glorias.land/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Insta height="30" />
    </a>
  </div>
)

export default Socials
