import React from 'react'
import BgImage from '../components/bg-image'
import Layout from '../components/layout'
import Enter from '../components/enter'

const IndexPage = props => (
  <Layout>
    <BgImage fluid={props.data.landingImage.childImageSharp.fluid} />
    <Enter />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    landingImage: file(relativePath: { eq: "000000010028.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mainPageImage: file(relativePath: { eq: "000000010027.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
