import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  width: 10em;
  max-width: 200px;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .spin {
    animation: spin 3s linear infinite;
    margin-bottom: 0;
  }
`

const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "martabak.png" }) {
      childImageSharp {
        fluid {
          base64
          tracedSVG
          aspectRatio
          srcWebp
          srcSetWebp
          originalName
        }
      }
    }
  }
`

const SpinningImage = ({ src, ...rest }) => {
  const data = useStaticQuery(query)
  return (
    <Wrapper className="w-32 max-w-xs h-auto" {...rest}>
      <Img fluid={data.file.childImageSharp.fluid} className="spin" />
    </Wrapper>
  )
}

export default SpinningImage
