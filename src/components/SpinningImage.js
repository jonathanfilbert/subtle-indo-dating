import React from "react"
import styled from "styled-components"

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

const SpinningImage = ({ src, ...rest }) => {
  return (
    <Wrapper className="w-32 max-w-xs h-auto" {...rest}>
      <img src={src} className="spin" />
    </Wrapper>
  )
}

export default SpinningImage
