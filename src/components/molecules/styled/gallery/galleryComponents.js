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
    max-width: 33rem;
    height: auto;
    place-self: center;
  }
`
