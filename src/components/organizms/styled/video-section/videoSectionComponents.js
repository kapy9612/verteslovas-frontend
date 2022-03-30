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
  //border: 5px solid var(--dark-gray);
  box-sizing: border-box;
  box-shadow: -4px -4px 8px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.25);
`