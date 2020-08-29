import React from 'react'
import Layout from '../components/layout'
import Socials from '../components/socials'
import Video from '../components/video'

const MainPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <Socials />
        <Video />
        <div className="prs-container">
          <h4>GLOR1A is supported by PRS Foundation Women Make Music</h4>
          <img
            src={data.wmm.childImageSharp.fluid.src}
            alt="Women Make Music"
          />
        </div>
      </div>
    </Layout>
  )
}

export default MainPage

export const query = graphql`
  query {
    wmm: file(relativePath: { eq: "wmm-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
