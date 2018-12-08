import React from 'react'

const Enter = props => (
  //   <div
  //     style={{
  //       display: 'flex',
  //       'justify-content': 'center',
  //       'align-items': 'center',
  //       height: '100vh',
  //     }}
  //   >
  //     <div style={{ color: 'white' }} />
  // </div>

  <div
    onClick={props.clicked}
    style={{
      position: 'fixed',
      bottom: 30,
      width: '100%',
      textAlign: 'center',
    }}
  >
    <p style={{ cursor: 'pointer' }}>enter</p>
  </div>
)

export default Enter
