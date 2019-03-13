import React from 'react'
import Layout from '../components/layout'
import Socials from '../components/socials'
import Video from '../components/video'

const MainPage = ({ data }) => (
  <Layout>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Video />
      <Socials />
    </div>
  </Layout>
)

export default MainPage
