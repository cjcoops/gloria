import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import ReactPlayer from 'react-player'
import classes from './bg-player.module.css'

class BgPlayer extends Component {
  render() {
    return (
      <div className={classes.wrapperWrapper}>
        <div className={classes.playerWrapper}>
          <ReactPlayer
            className={classes.reactPlayer}
            url={withPrefix('/out_teaser2.mp4')}
            width="100%"
            height="100%"
            playing
            loop
            muted
          />
        </div>
      </div>
    )
  }
}

export default BgPlayer
