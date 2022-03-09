import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  width: 100%;
  
  background-color: white;
  grid-template-rows: 6fr 0.5fr;

`
export const FooterCopyrightContainer = styled.div`
  display: grid;
  padding: 1rem 6rem 1rem 6rem;
  background-color: var(--whitesmoke-background);
  justify-content: center;
`
export const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  a {
    &:hover {
      opacity: 0.5;
    }
  }
`

export const FooterWrapper = styled.div`
  display: grid;
  //max-width: 21rem;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 6rem 2rem 6rem;
  box-sizing: border-box;
`
export const FooterContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 90%;
`
export const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  height: 3rem;
  
  img{
    max-width: 100%;
  }
`
export const FooterContactWrapper = styled.div`
  display: grid;
  align-content: start;
`
export const FooterSocialWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5rem;
  justify-content: start;
  align-content: center;

  img {
    width: 3rem;
    height: auto;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }
`
export const FooterContactContainer = styled.div`
  display: grid;
  align-content: center;
  grid-gap: 1rem;
`

export const ContactMapIframeWrapper = styled.div`
  display: grid;
  margin-top: 2rem;
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`