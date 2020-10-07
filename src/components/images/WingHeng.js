import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import WinghengImage from "../../images/winghen.png"

const Wrapper = styled.div`
  width: 10em;
  max-width: 200px;
  @keyframes jiggle {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(20deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .jiggle {
    animation: jiggle 3s linear infinite;
    margin-bottom: 0;
  }
`

const query = graphql`
  query Haha {
    file(relativePath: { eq: "winghen.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const WingHeng = ({ src, ...rest }) => {
  const data = useStaticQuery(query)
  return (
    <Wrapper className="w-32 max-w-xs h-auto" {...rest}>
      <Img fluid={data.file.childImageSharp.fluid} />
    </Wrapper>
  )
}

export default WingHeng
