import styled from "styled-components";
import {handleMainCardColor} from "../../../molecules/functions/moleculesFunctions";


export const MainCardSectionContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  
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

`
/*Másik*/
export const MainLeftCardContainer = styled.div`
  width: 105%;
  
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