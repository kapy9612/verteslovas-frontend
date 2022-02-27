import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: grid;
  //max-width: 21rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 0;
  column-gap: 0;
  width: 100%;

  img {
    width: 100%;
    height: stretch;
    max-height: 20rem;
    place-self: center;
  }
`
