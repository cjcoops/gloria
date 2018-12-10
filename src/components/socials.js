import React from 'react'
import { IconContext } from 'react-icons'
import { IoLogoFacebook, IoLogoInstagram, IoMdMail } from 'react-icons/io'

const Socials = () => (
  <IconContext.Provider value={{ size: '20', style: { margin: '0 10' } }}>
    <div
      style={{
        position: 'absolute',
        bottom: '10%',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <IoLogoFacebook />
        <IoLogoInstagram />
        <IoMdMail />
      </div>
    </div>
  </IconContext.Provider>
)

export default Socials
