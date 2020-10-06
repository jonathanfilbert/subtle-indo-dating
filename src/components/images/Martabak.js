import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
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
    <Wrapper {...rest}>
      <div className="w-20 h-auto">
        <Img fluid={data.file.childImageSharp.fluid} className="spin" />
      </div>
    </Wrapper>
  )
}

export default SpinningImage
