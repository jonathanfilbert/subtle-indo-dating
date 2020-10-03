import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Cooper";
  background: linear-gradient(180deg, #e95133 0%, #ff742f 38.85%, #fcff42 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1em;
  -webkit-text-stroke: 1.2px black;
`
const PecelText = ({ text, ...rest }) => {
  return <Wrapper className="text-5xl md:text-6xl">{text}</Wrapper>
}

export default PecelText

/* Hahah */
