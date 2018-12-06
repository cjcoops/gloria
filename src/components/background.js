import Img from 'gatsby-image'
import React from 'react'

const Background = props => (
  <div>
    <Img fluid={props.children} />
  </div>
)

export default Background
