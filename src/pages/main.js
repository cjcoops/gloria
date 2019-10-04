import React from 'react'
import Layout from '../components/layout'
import Socials from '../components/socials'
import Video from '../components/video'

const MainPage = ({ data }) => (
  <Layout>
    <div>
      <Socials />
      <Video />
    </div>
  </Layout>
)

export default MainPage
