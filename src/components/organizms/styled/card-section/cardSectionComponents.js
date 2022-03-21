import styled from "styled-components";
import {Carousel} from "react-responsive-carousel";


export const MainCardSectionContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  margin: 50px 0 50px 0;
 
`
/*Egyik*/
export const MainCardLeftImg = styled.img`
  //max-width: 21rem;
  width: 105%;
  height: auto;
  display: grid;
  align-self: center;
  border-radius:  ${props => props.border ? "2.5rem" : "0"};

`
export const MainRightCardContainer = styled.div`
  width: 105%;
  margin-left: -5%;
  opacity: 95%;
  align-self: center;
  border-radius:  ${props => props.border ? "2.5rem" : "0"};
  z-index: 100;
`
/*Másik*/
export const MainLeftCardContainer = styled.div`
  width: 105%;
  z-index: 100;
  opacity: 95%;
  align-self: center;

`
export const MainCardRightImg = styled.img`
  //max-width: 21rem;
  width: 105%;
  height: auto;
  display: grid;
  align-self: center;
  margin-left: -5%;
  border-radius:  ${props => props.border ? "2.5rem" : "0"};
`
export const StyledCarousel = styled(Carousel)`
  width: 105%;
  margin-left: -5%;

  z-index: 1 !important;
`
export const StyledCarouselLeft= styled(Carousel)`
  //max-width: 21rem;
  width: 105%;
  z-index: 1 !important;
`