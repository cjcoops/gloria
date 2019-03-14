import React from 'react'
import Layout from '../components/layout'
import WindowVideo from '../components/window-video'
// import ReleaseDate from '../components/release-date'
import Enter from '../components/enter'

const IndexPage = ({ data }) => (
  <Layout>
    <WindowVideo gif={data.gif} gloriaWindow={data.gloriaWindow} />
    <Enter />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    gloriaWindow: file(relativePath: { eq: "Gloria Logo Window.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    gif: file(relativePath: { eq: "out_teaser2.gif" }) {
      publicURL
    }
  }
`
