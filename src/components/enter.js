import React from 'react'

const Enter = props => (
  <div
    onClick={props.clicked}
    style={{
      position: 'absolute',
      bottom: '10%',
      width: '100%',
      textAlign: 'center',
    }}
  >
    <p style={{ cursor: 'pointer', letterSpacing: '1rem' }}>ENTER</p>
  </div>
)

export default Enter
