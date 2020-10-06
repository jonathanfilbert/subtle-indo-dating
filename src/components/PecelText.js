import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  .pecelText {
    -webkit-text-stroke: 1.2px black;
    font-family: "Cooper";
    background: -webkit-linear-gradient(
      90deg,
      #09a988 0%,
      #98fa24 20.85%,
      #fc5000 80%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1em;
  }
`
const PecelText = ({ text, ...rest }) => {
  return (
    <Wrapper className="text-3xl md:text-6xl uppercase">
      <div className="pecelText">
        <div {...rest}>{text}</div>
      </div>
    </Wrapper>
  )
}

export default PecelText

/* Hahah */
