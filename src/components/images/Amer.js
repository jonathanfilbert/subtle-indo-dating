import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  position: relative;
  @keyframes shake {
    to {
      bottom: 100px;
      left: 20px;
      transform: rotate(20deg);
    }
  }

  .shake {
    animation: shake 0.2s ease-in-out infinite;
    animation-direction: alternate;
    position: absolute;
    margin-bottom: 0;
    left: 0;
    bottom: 0;
  }
`

const query = graphql`
  query AmerQuery {
    file(relativePath: { eq: "amer.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SpinningImage = ({ src, ...rest }) => {
  const data = useStaticQuery(query)
  return (
    <Wrapper {...rest}>
      <div className="w-20">
        <Img fluid={data.file.childImageSharp.fluid} className="shake" />
      </div>
    </Wrapper>
  )
}

export default SpinningImage
