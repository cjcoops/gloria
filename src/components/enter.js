import React from 'react'
import classes from './enter.module.css'
import { Link } from 'gatsby'

const Enter = props => (
  <Link to="/main">
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
          color: 'rgba(255,255,255,0.7)',
        }}
      >
        ENTER
      </p>
    </div>
  </Link>
)

export default Enter
