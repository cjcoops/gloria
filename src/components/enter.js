import React from 'react'
import classes from './enter.module.css'

const Enter = props => (
  <div
    className={classes.wrapper}
    onClick={props.clicked}
    style={{
      position: 'absolute',
      bottom: '10%',
      width: '100%',
      textAlign: 'center',
    }}
  >
    <p
      className={classes.wrapper}
      style={{
        cursor: 'pointer',
        letterSpacing: '1.2rem',
        marginRight: '-1.2rem',
        color: 'rgba(255,255,255,0.9)',
      }}
    >
      ENTER
    </p>
  </div>
)

export default Enter
