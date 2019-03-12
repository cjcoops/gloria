import React from 'react'
import Layout from '../components/layout'
import WindowVideo from '../components/window-video'

const IndexPage = ({ data }) => (
  <Layout>
    <WindowVideo gif={data.gif} gloriaWindow={data.gloriaWindow} />
    {/* <ReleaseDate>
          <span className="less-spacing">'</span>Ou
          <span className="less-spacing">t</span>' 26 January 2019
        </ReleaseDate> */}
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
