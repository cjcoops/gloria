import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Video = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          youtube: markdownRemark {
            html
          }
        }
      `}
      render={data => (
        <div
          dangerouslySetInnerHTML={{
            __html: data.youtube.html.replace(/<p>|<\/p>/g, ''),
          }}
        />
      )}
    />
  )
}
export default Video
