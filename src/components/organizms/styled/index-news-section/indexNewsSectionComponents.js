import styled from "styled-components";
import {Carousel} from "react-responsive-carousel";

export const NewsCarousel = styled(Carousel)`

`

export const CarouselDiv = styled.div`
  display: grid;
  background-image: ${props => "url(" + props.image + ")"};
  background-position: center;
  background-size: contain;
  aspect-ratio: 3/1;
  height: 100%;
`