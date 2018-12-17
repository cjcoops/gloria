import React, { Component } from 'react'
import Layout from '../components/layout'
import WindowVideo from '../components/window-video'
import ReleaseDate from '../components/release-date'
// import Socials from '../components/socials'

class IndexPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <WindowVideo />
          <ReleaseDate>
            <span className="less-spacing">'</span>Ou
            <span className="less-spacing">t</span>' 26 January 2019
          </ReleaseDate>
        </Layout>
      </>
    )
  }
}

export default IndexPage

// export const pageQuery = graphql`
//   query {
//   }
// `
