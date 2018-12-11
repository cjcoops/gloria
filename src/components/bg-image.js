import Img from 'gatsby-image'
import styled from 'styled-components'

const BgImage = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  height: 100vh;
  transition: opacity 3s ease-in-out;
  opacity: ${props => (props.isShown ? 1 : 0)};

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }
`

export default BgImage
