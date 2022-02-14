import styled from "styled-components";

import {
    handleBodyFontSize,
    handleColor,
    handleFontWeight,
    handleMarginBottom,
    handleMarginTop,
    handleTextAlign,
    handleAlignSelf
} from "../../functions/atomsFunctions";

export const Title = styled.h1`
  font-family: ${props => props.sand ? "'Quicksand', sans-serif" : "'Parisienne', sans-serif"};
  font-style: normal;
  font-size: var(--title);
  line-height: var(--title-lh);

  /*Optional fields*/
  color: ${({color}) => handleColor(color)};
  text-align: ${({textAlign}) => handleTextAlign(textAlign)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
`

export const Header2 = styled.h2`
  font-family: ${props => props.sand ? "'Quicksand', sans-serif" : "'Parisienne', sans-serif"};
  font-style: normal;
  font-size: var(--h2);
  line-height: var(--h2-lh);

  /*Optional fields*/
  color: ${({color}) => handleColor(color)};
  text-align: ${({textAlign}) => handleTextAlign(textAlign)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
`

export const Header3 = styled.h3`
  font-family: ${props => props.sand ? "'Quicksand', sans-serif" : "'Parisienne', sans-serif"};
  font-style: normal;
  font-size: ${props => props.sand ? " calc(var(--form-title-camp)*1.3)" : " var(--form-title-simple)"};
  line-height: var(--h2-lh);

  /*Optional fields*/
  font-weight: ${({weight}) => handleFontWeight(weight)};

  color: ${({color}) => handleColor(color)};
  text-align: ${({textAlign}) => handleTextAlign(textAlign)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
  align-self: ${({alignSelf}) => handleAlignSelf(alignSelf)};
`

export const Header4 = styled.h4`
  font-style: normal;
  font-family: 'Parisienne', sans-serif;
  font-size: var(--card-title);
  line-height: var(--h2-lh);
  text-transform: ${props => props.upper ? "uppercase" : "unset"};

  /*Optional fields*/
  color: ${({color}) => handleColor(color)};
  text-align: ${({textAlign}) => handleTextAlign(textAlign)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
`
export const H5AboutUs = styled.h5`
  font-style: normal;
  font-family: 'Parisienne', sans-serif;
  font-size: var(--h5);
  text-transform: ${props => props.upper ? "uppercase" : "unset"};
  line-height: var(--h2-lh);

  /*Optional fields*/
  color: ${({color}) => handleColor(color)};
  text-align: ${({textAlign}) => handleTextAlign(textAlign)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
`

export const Body = styled.p`
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
`

export const Span = styled.span`
  color: ${({color}) => handleColor(color)};
`