import styled from "styled-components";
import {
    handleFontWeight,
    handleBodyFontSize,
    handleColor,
    handleTextAlign,
    handleMarginTop,
    handleMarginBottom
} from "../../../atoms/functions/atomsFunctions"

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 0.1fr 1fr;

`
export const Icon = styled.div`
  text-align: center;
  padding: 2rem;
`
export const BodyContainer = styled.div`
  min-height: 12rem;
  font-style: normal;

  font-family: 'Raleway', sans-serif;
  font-weight: ${({weight}) => handleFontWeight(weight)};
  font-size: ${({size}) => handleBodyFontSize(size)};
  line-height: var(--p-lh);
  text-transform: ${props => props.upper ? "uppercase" : "unset"};

  br {
    margin-bottom: var(--small);
  }

  strong {
    font-weight: var(--bold);
  }

  /*Optional fields*/
  color: ${({color}) => handleColor(color)};
  text-align: ${({textAlign}) => handleTextAlign(textAlign)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    margin: 0;
    min-height: 18rem;

  }
`