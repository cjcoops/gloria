import React from 'react'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import classes from './window-video.module.css'

const WindowVideo = () => (
  <StaticQuery
    query={graphql`
      query {
        landingPageImage: file(relativePath: { eq: "Gloria Logo Window.png" }) {
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
    `}
    render={data => (
      <>
        <img className={classes.gif} src={data.gif.publicURL} alt="Video" />
        <img
          className={classes.window}
          src={data.landingPageImage.childImageSharp.fluid.src}
          alt="Logo"
        />
      </>
    )}
  />
)

export default WindowVideo
