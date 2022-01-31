import styled from "styled-components";

import {
  handleColor,
  handleFontWeight,
  handleMarginBottom,
  handleMarginTop,
  handleTextAlign
} from "../../functions/atomsFunctions";

export const Title = styled.h1`
  font-family: ${props => props.sand ? "'Quicksand', sans-serif" : "'Parisienne', sans-serif"};
  font-style: normal;
  font-size: var(--title);
  line-height: var(--title-lh);
  
  /*Optional fields*/
  color: ${({ color }) => handleColor(color)};
  text-align: ${({ textAlign }) => handleTextAlign(textAlign)};
  margin-top: ${({ marginTop }) => handleMarginTop(marginTop)};
  margin-bottom: ${({ marginBottom }) => handleMarginBottom(marginBottom)};
`

export const Header2 = styled.h2`
  font-family: ${props => props.sand ? "'Quicksand', sans-serif" : "'Parisienne', sans-serif"};
  font-style: normal;
  font-size: var(--h2);
  line-height: var(--h2-lh);

  /*Optional fields*/
  color: ${({ color }) => handleColor(color)};
  text-align: ${({ textAlign }) => handleTextAlign(textAlign)};
  margin-top: ${({ marginTop }) => handleMarginTop(marginTop)};
  margin-bottom: ${({ marginBottom }) => handleMarginBottom(marginBottom)};
`

export const Header3 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: var(--h3);
  line-height: var(--h3-lh);
  text-transform: ${props => props.upper ? "uppercase" : "unset"};
  
  /*Optional fields*/
  color: ${({ color }) => handleColor(color)};
  text-align: ${({ textAlign }) => handleTextAlign(textAlign)};
  margin-top: ${({ marginTop }) => handleMarginTop(marginTop)};
  margin-bottom: ${({ marginBottom }) => handleMarginBottom(marginBottom)};
`

export const Header4 = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: var(--h4);
  line-height: var(--h4-lh);
  text-transform: ${props => props.upper ? "uppercase" : "unset"};
  
  /*Optional fields*/
  color: ${({ color }) => handleColor(color)};
  text-align: ${({ textAlign }) => handleTextAlign(textAlign)};
  margin-top: ${({ marginTop }) => handleMarginTop(marginTop)};
  margin-bottom: ${({ marginBottom }) => handleMarginBottom(marginBottom)};
`

export const Body = styled.p`
  font-style: normal;
  font-weight: ${({ weight }) => handleFontWeight(weight)};
  font-size: ${({ size }) => handleBodyFontSize(size)};
  line-height: var(--body-lh);
  text-transform: ${props => props.upper ? "uppercase" : "unset"};

  br {
    margin-bottom: var(--small);
  }
  
  strong{
    font-weight: var(--bold);
  }

  /*Optional fields*/
  color: ${({ color }) => handleColor(color)};
  text-align: ${({ textAlign }) => handleTextAlign(textAlign)};
  margin-top: ${({ marginTop }) => handleMarginTop(marginTop)};
  margin-bottom: ${({ marginBottom }) => handleMarginBottom(marginBottom)};
`

export const Caption = styled.p`
  font-style: normal;
  font-weight: ${({ weight }) => handleFontWeight(weight)};
  font-size: var(--caption);
  line-height: var(--caption-lh);
  text-transform: ${props => props.upper ? "uppercase" : "unset"};

  /*Optional fields*/
  color: ${({ color }) => handleColor(color)};
  text-align: ${({ textAlign }) => handleTextAlign(textAlign)};
  margin-top: ${({ marginTop }) => handleMarginTop(marginTop)};
  margin-bottom: ${({ marginBottom }) => handleMarginBottom(marginBottom)};
`

export const Span = styled.span`
  color: ${({ color }) => handleColor(color)};
`