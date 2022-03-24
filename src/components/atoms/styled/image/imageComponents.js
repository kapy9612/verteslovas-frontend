import styled from "styled-components"

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  place-self: center;
`

export const TerkepImg = styled.img`
  max-width: 100%;
  height: auto;
  padding-top: 10rem;
  margin-bottom: var(--small);
`

export const MobileImg = styled(Img)`
  display: none;
  
  @media(max-width: 800px){
    display: block;
  }
`