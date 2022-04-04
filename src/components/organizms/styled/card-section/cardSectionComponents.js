import styled from "styled-components";
import {Carousel} from "react-responsive-carousel";


export const MainCardSectionContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  margin: 0 0 var(--largest) 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    margin: 0;
  }

`
export const MainCardLeftImg = styled.img`
  //max-width: 21rem;
  width: 105%;
  height: auto;
  display: grid;
  align-self: center;
  border-radius: ${props => props.border ? "2.5rem" : "0"};

  @media (max-width: 800px) {
    max-width: 100%;
    width: auto;
    display: none;
  }
`
export const MainRightCardContainer = styled.div`
  width: 105%;
  margin-left: -5%;
  opacity: 95%;
  align-self: center;
  border-radius: ${props => props.border ? "2.5rem" : "0"};
  z-index: 100;

  @media (max-width: 800px) {
    max-width: 100%;
    width: auto;
    margin-left: 0;
  }
`

export const MainLeftCardContainer = styled.div`
  width: 105%;
  z-index: 100;
  opacity: 95%;
  align-self: center;

  @media (max-width: 800px) {
    max-width: 100%;
    width: auto;
  }
`
export const MainCardRightImg = styled.img`
  width: 105%;
  height: auto;
  display: grid;
  align-self: center;
  margin-left: -5%;
  border-radius: ${props => props.border ? "2.5rem" : "0"};

  @media (max-width: 800px) {
    max-width: 100%;
    width: auto;
    margin-left: 0;
    display: none;
  }
`
export const StyledCarousel = styled(Carousel)`
  width: 105%;
  margin-left: -5%;

  z-index: 1 !important;

  @media (max-width: 800px) {
    max-width: 100%;
    width: auto;
    display: none;
  }
`
export const StyledCarouselLeft = styled(Carousel)`
  width: 105%;
  z-index: 1 !important;

  @media (max-width: 800px) {
    max-width: 100%;
    width: auto;
    display: none;
  }
`

export const StyledCarouselMobile = styled(Carousel)`
  display: none;
  
  @media (max-width: 800px) {
    max-width: 100%;
    width: auto;
    display: block;
    margin-bottom: 1rem;
  }
`