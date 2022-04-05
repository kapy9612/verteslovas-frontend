import styled from "styled-components";
import {Link} from "gatsby";

import {handleMainCardColor, handleButtonCardBG} from "../../functions/moleculesFunctions"

import {ButtonLink} from "../../../atoms/styled/button/buttonComponents";

export const WeddingCardContainer = styled.div`
  display: grid;
  justify-content: stretch;
  //max-width: 21rem;
  grid-template-rows: 9rem auto 1fr;
  box-sizing: border-box;
  padding: 2rem 2rem;
  background: var(--whitesmoke-background);
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  background: ${({color}) => handleMainCardColor(color)};
  min-height: 25rem;

  img {
    max-width: 6rem;
    height: auto;
    place-self: center;
    margin-bottom: 1rem;
  }
 
  
`

export const MainCardContainer = styled.div`
  display: grid;
  //max-width: 21rem;
  grid-template-rows: auto auto 1fr;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 3rem 2rem 3rem;
  background: ${({color}) => handleMainCardColor(color)};
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  min-height: 25rem;
  @media(max-width: 1140px){
    min-height: 10rem;

  }
  @media(max-width: 800px){
    padding: 1rem 1.5rem 1rem 1.5rem;

  }
`
export const MainCardButton = styled(ButtonLink)`
  text-align: left;
  padding: 1rem 0 0 0;
  font-weight: var(--bolder);
  box-shadow: none;

  &:hover {
    color: var(--dark-gray)
  }
  &:active{
    box-shadow: none;
  }

`
export const ChildCardContainer = styled.div`
  display: grid;
  //max-width: 21rem;
  grid-template-rows: auto auto 1fr;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 3rem 2rem 3rem;
  border-radius: 2.5rem;
  background: ${({color}) => handleMainCardColor(color)};
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  
  @media(max-width: 1150px){
    border-radius: 0 0 2.5rem 2.5rem;
  }
  
  @media(max-width: 600px){
    padding: 1rem 1.5rem 1rem 1.5rem;
    border-radius: 0 0 2.5rem 2.5rem;
  }
`

export const ActiveCardContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: stretch;
  grid-template-rows: 16rem 1fr;
  box-sizing: border-box;
  background: var(--light-grey);
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
`
export const ButtonCardContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 30rem;
  justify-self: stretch;
  grid-template-rows: 18rem 1fr;
  box-sizing: border-box;
  background: ${({color}) => handleButtonCardBG(color)};
  border-radius: 2.5rem;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
`

export const ActiveCardImg = styled.div`
  background-image: ${props => "url(" + props.image + ")"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const ButtonCardImg = styled.div`
  background-image: ${props => "url(" + props.image + ")"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2.5rem 2.5rem 0 0;
`
export const ActiveCardContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1rem 2rem 2rem 2rem;
  box-sizing: border-box;
`


export const ButtonCardContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 2rem 1rem 2rem;
  box-sizing: border-box;
`
export const ButtonCardButtonWrapper = styled.div`
  justify-self: center;
  margin: 3rem 0 2rem 0;
`

/*IndexCard*/

export const IndexCardWrapper = styled(Link)`
  display: grid;
  grid-template-rows: auto 10rem;
  background: white;
  grid-gap: 1rem;
  box-sizing: border-box;
  padding: 2rem 0.5rem 2rem 0.5rem;
  //box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  box-shadow: -4px -4px 8px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 60px;

  transition: filter 0.5s, box-shadow 0.5s;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: inset 0 0 4px #000000;
  }

  img {
    place-self: center;
    max-width: 100%;
    max-height: 10rem;
  }
`