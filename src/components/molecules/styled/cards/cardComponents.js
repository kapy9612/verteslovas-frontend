import styled from "styled-components";
import {handleMainCardColor, handleButtonCardBG} from "../../functions/moleculesFunctions"
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