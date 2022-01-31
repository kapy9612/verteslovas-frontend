import styled from "styled-components"

import {
  handleAlignContent,
  handleGridColumn, handleGridGap, handleJustifyContent,
  handleLayoutBackground,
  handleLayoutMinHeight,
  handleLayoutPadding,
  handleMarginBottom, handleMarginTop
} from "../../functions/atomsFunctions"

export const Background = styled.div`
  background: ${({ customBg }) => handleLayoutBackground(customBg)};
`

export const LayoutGrid = styled.div`
  display: grid;
  width: ${props => props.thin ? "60vw" : "80vw"};
  margin: auto;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem 1.5rem;
  padding: ${({ customPadding }) => handleLayoutPadding(customPadding)};
  min-height: ${({ minHeight }) => handleLayoutMinHeight(minHeight)};
  align-content: center;

  @media screen and (max-width: 1100px) {
    width: ${props => props.wide ? "70vw" : "85vw"};
  }

  @media screen and (max-width: 800px) {
    min-height: auto;
    width: 90%;
    grid-template-columns: 1fr;
  }
`

export const InlineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${({ gridGap }) => handleGridGap(gridGap)};
  justify-content: stretch;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem 1.5rem;
  }
`

export const Col = styled.div`
  width: 100%;
  display: ${props => props.grid ? "grid" : ""};
  grid-column: ${({ span }) => handleGridColumn(span)};
  margin-bottom: ${({ marginBottom }) => handleMarginBottom(marginBottom)};
  margin-top: ${({ marginTop }) => handleMarginTop(marginTop)};
  align-content: ${({ alignContent }) => handleAlignContent(alignContent)};
  justify-content: ${({ justifyContent }) => handleJustifyContent(justifyContent)};

  @media screen and (max-width: 800px) {
    grid-column: 1/-1 !important;
  }
`

export const DesktopCol = styled(Col)`

  @media (max-width: 800px) {
    display: none !important;
  }
`

export const MobileCol = styled(Col)`
  display: none !important;
  @media (max-width: 800px) {
    display: block !important;
  }
`