import styled from "styled-components";
import {Col} from "../../../atoms/styled/layout/layoutComponents";

export const VideoSectionContainer = styled.div`
  display: grid;
  margin: auto;
  padding-top: 6rem;
  background-color: var(--whitesmoke-background);
  max-width: 100%;
  justify-self: center;
`
export const SmallVideoSectionContainer = styled(Col)`
 // border: 2px solid var(--black);
  width:95%;
  margin: auto;
  box-sizing: border-box;
  box-shadow: -4px -4px 8px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.25);
`
export const WeddingVideoSectionContainer = styled(Col)`
  //border: 5px solid var(--dark-gray);
  width: 70%;
  margin: auto;
  box-sizing: border-box;
  justify-content: center;
  box-shadow: -4px -4px 8px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.25);
  @media(max-width: 800px){
    width: 100%;
  }
`