import React, { Component } from 'react'
import BgImage from '../components/bg-image'
import Layout from '../components/layout'
import Enter from '../components/enter'
// import Socials from '../components/socials'
// import BgPlayer from '../components/bg-player'
import { graphql, withPrefix } from 'gatsby'

class IndexPage extends Component {
  state = {
    onMainPage: true,
  }

  handleEnterClicked() {
    // this.setState({
    //   onMainPage: false,
    // })
  }

  render() {
    const enter = this.state.onMainPage && (
      <Enter clicked={() => this.handleEnterClicked()} />
    )

    // const video = !this.state.onMainPage && <Video />

    // const socials = !this.state.onMainPage && <Socials />

    return (
      <>
        <Layout>
          <div style={{ height: '100vh' }}>
            <img src={withPrefix('/out_teaser2.gif')} alt="Logo" />
            <BgImage
              fluid={this.props.data.landingPageImage.childImageSharp.fluid}
              isShown={this.state.onMainPage}
            />
            <BgImage
              fluid={this.props.data.mainPageImage.childImageSharp.fluid}
              isShown={!this.state.onMainPage}
            />
            {/* <BgPlayer /> */}
            {enter}
          </div>
        </Layout>
      </>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    landingPageImage: file(relativePath: { eq: "Gloria-Logo-Window.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
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
