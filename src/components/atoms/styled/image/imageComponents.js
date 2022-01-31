import styled from "styled-components"

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  place-self: center;
`

export const MobileImg = styled(Img)`
  display: none;
  
  @media(max-width: 800px){
    display: block;
  }
`