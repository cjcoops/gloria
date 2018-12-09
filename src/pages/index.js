import React, { Component } from 'react'
import BgImage from '../components/bg-image'
import Layout from '../components/layout'
import Enter from '../components/enter'
import Video from '../components/video'
import { graphql } from 'gatsby'

class IndexPage extends Component {
  state = {
    onMainPage: true,
  }

  handleEnterClicked() {
    this.setState({
      onMainPage: false,
    })
  }

  render() {
    const enter = this.state.onMainPage && (
      <Enter clicked={() => this.handleEnterClicked()} />
    )

    const video = !this.state.onMainPage && <Video />

    return (
      <>
        <Layout>
          <div style={{ height: '100vh' }}>
            <BgImage
              fluid={this.props.data.landingPageImage.childImageSharp.fluid}
              isShown={this.state.onMainPage}
            />
            <BgImage
              fluid={this.props.data.mainPageImage.childImageSharp.fluid}
              isShown={!this.state.onMainPage}
            />
            {enter}
          </div>

          {video}
        </Layout>
      </>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    landingPageImage: file(relativePath: { eq: "000000010028.jpg" }) {
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
