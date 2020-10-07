import React, { useState } from "react"
import PecelText from "../components/PecelText"
import { navigate, useStaticQuery } from "gatsby"
import * as clipboard from "clipboard-polyfill/text"
import Img from "gatsby-image"
import styled from "styled-components"

const query = graphql`
  query {
    file(relativePath: { eq: "sarasa.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SpinningContainer = styled.div`
  animation: spin 5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Thanks = () => {
  const [isCopied, setisCopied] = useState(false)
  const sarasa = useStaticQuery(query)
  const time = Date.now()
  const referralCode = `https://subtleindomatches.com/?ref_code=${time}`
  const handleCopy = () => {
    clipboard.writeText(referralCode).then(setisCopied(true))
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col title px-5 text-center">
      <SpinningContainer className="w-24 h-auto mb-8">
        <Img fluid={sarasa.file.childImageSharp.fluid} />
      </SpinningContainer>
      <PecelText text="Thanks" />
      <div>Want to increase your chance to get an invite?</div>
      <div>Share this code to your friends!</div>
      <div className="  bg-gray-900 px-3 py-3 mt-5 rounded">
        <div className="font-mono text-gray-100">{referralCode}</div>
      </div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-3"
        onClick={() => handleCopy()}
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
      <button
        className="text-green-500 hover:text-green-700 font-bold mt-3"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  )
}

export default Thanks
