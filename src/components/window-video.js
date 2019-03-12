import React, { Component } from 'react'
import { Link } from 'gatsby'
// import { StaticQuery, graphql } from 'gatsby'
import classes from './window-video.module.css'

class WindowVideo extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    logoLoaded: false,
  }

  handleLogoLoaded() {
    this.setState({
      logoLoaded: true,
    })
    // console.log('loaded')
  }

  render() {
    // let gifAssignedClasses = [classes.gif]

    // if (!this.state.logoLoaded) {
    //   gifAssignedClasses.push(classes.VisibilityHidden)
    // }

    return (
      <>
        <Link to="/main">
          <img
            className={classes.window}
            src={this.props.gloriaWindow.childImageSharp.fluid.src}
            alt="Logo"
          />
        </Link>

        <img
          className={classes.gif}
          src={this.props.gif.publicURL}
          alt="Video"
        />
      </>
    )
  }
}

// const WindowVideo = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         landingPageImage: file(relativePath: { eq: "Gloria Logo Window.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 800) {
//               ...GatsbyImageSharpFluid_noBase64
//             }
//           }
//         }
//         gif: file(relativePath: { eq: "out_teaser2.gif" }) {
//           publicURL
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <img
//           className={classes.window}
//           src={data.landingPageImage.childImageSharp.fluid.src}
//           alt="Logo"
//         />
//         <img className={classes.gif} src={data.gif.publicURL} alt="Video" />
//       </>
//     )}
//   />
// )

export default WindowVideo
