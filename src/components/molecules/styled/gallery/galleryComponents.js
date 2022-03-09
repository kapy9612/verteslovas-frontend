import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;

  img {
    width: 100%;
    margin: -1px;
    place-self: center;
  }
`
