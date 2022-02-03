import styled from "styled-components";
import { Link } from "gatsby";

import { handleButtonColor, handleButtonHover } from "../../functions/atomsFunctions";

export const ButtonLink = styled(Link)`
  font-size: var(--form-p);
  line-height: var(--title-lh);
  font-family: "Raleway", sans-serif;
  font-style: normal;
  border-radius: 0;
  padding: 0.75rem 1.5rem 0.75rem 1.5rem;
  box-sizing: border-box;
  margin: 0;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  color: var(--dark-grey);
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  background-color: ${({variant}) => handleButtonColor(variant)};
  
  &:hover {
    background-color: ${({variant}) => handleButtonHover(variant)};
  }
  
  &:active{
    box-shadow: inset 0 0 0.5rem #000000;
  }

  &:disabled {
    opacity: 0.25 !important;
    background-color: var(--disabled-grey) !important;
    pointer-events: none;
  }
`

export const Button = styled.button`
  font-size: var(--body);
  line-height: var(--button-lh);
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  border-radius: 0.5rem;
  border: ${props => props.variant==="outlined" ? "1px solid var(--dark-blue)" : "none"};
  padding: ${props => props.arrow ? "0.75rem 2.5rem 0.75rem 1rem" : "0.75rem 1rem 0.75rem 1rem"};
  box-sizing: border-box;
  margin: 0;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border 0.2s;
  color: ${props => props.variant==="outlined" ? "var(--dark-blue)" : "white"};
  box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.25);
  background-color: ${({variant}) => handleButtonColor(variant)};
  
  &:hover {
    background-color: ${({variant}) => handleButtonHover(variant)};
    color: ${props => props.variant==="outlined" ? "var(--grayish-cyan)" : "white"};
    border: ${props => props.variant==="outlined" ? "1px solid var(--grayish-cyan)" : "none"};
  }
  
  &:active{
    box-shadow: inset 0 0 0.5rem #000000;
  }

  &:disabled {
    opacity: 0.25 !important;
    background-color: var(--disabled-grey) !important;
    pointer-events: none;
  }
`

export const ButtonSpan = styled.span`
  font-size: var(--body);
  line-height: var(--button-lh);
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  border-radius: 0.5rem;
  border: ${props => props.variant==="outlined" ? "1px solid var(--dark-blue)" : "none"};
  padding: ${props => props.arrow ? "0.75rem 2.5rem 0.75rem 1rem" : "0.75rem 1rem 0.75rem 1rem"};
  box-sizing: border-box;
  margin: 0;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border 0.2s;
  color: ${props => props.variant==="outlined" ? "var(--dark-blue)" : "white"};
  box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.25);
  background-color: ${({variant}) => handleButtonColor(variant)};
  background-image: url(${props => (props.arrow && props.variant!=="outlined") ? arrowButton : (props.arrow && props.variant==="outlined" ? arrowButtonPrimary : "")});
  background-repeat: ${props => props.arrow ? "no-repeat" : ""};
  background-position: ${props => props.arrow ? "calc(100% - 0.625rem) center" : ""};
  background-size: ${props => props.arrow ? "1.5rem" : ""};
  
  &:hover {
    background-color: ${({variant}) => handleButtonHover(variant)};
    color: ${props => props.variant==="outlined" ? "var(--grayish-cyan)" : "white"};
    border: ${props => props.variant==="outlined" ? "1px solid var(--grayish-cyan)" : "none"};
    background-image: url(${props => (props.arrow && props.variant!=="outlined") ? arrowButton : (props.arrow && props.variant==="outlined" ? arrowButtonHover : "")});
  }
  
  &:active{
    box-shadow: inset 0 0 0.5rem #000000;
  }

  &:disabled {
    opacity: 0.25 !important;
    background-color: var(--disabled-grey) !important;
    pointer-events: none;
  }
`