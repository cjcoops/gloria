import React from 'react'
import Background from '../components/background'

const IndexPage = props => (
  <Background>{props.data.imageOne.childImageSharp.fluid}</Background>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "000000010028.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
