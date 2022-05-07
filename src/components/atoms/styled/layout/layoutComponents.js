import styled, {css} from "styled-components"

import {
    handleAlignContent,
    handleGridColumn, handleGridGap, handleJustifyContent,
    handleLayoutBackground,
    handleLayoutMinHeight,
    handleLayoutPadding,
    handleMarginBottom, handleMarginTop
} from "../../functions/atomsFunctions"

export const Background = styled.div`
  background: ${({customBg}) => handleLayoutBackground(customBg)};
`
export const BackgroundWedding = styled.div`
  background: ${({customBg}) => handleLayoutBackground(customBg)};
  background-image: url("/assets/bg16.png");
  background-repeat: no-repeat;
  background-size:  100%  ;
  background-position: top;
  box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.25);
  z-index: 100;
  border-bottom: 2rem;
  background-color: var(--grey-background);
  margin-bottom: 1rem;
  @media (max-width: 1300px) {
    background-position: right;

    background-size: auto 100%  ;

  }
  
`

export const LayoutGrid = styled.div`
  display: grid;
  width: ${props => props.thin ? "60vw" : "72vw"};
  max-width:1920px;
  margin: auto;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem 3rem;
  padding: ${({customPadding}) => handleLayoutPadding(customPadding)};
  min-height: ${({minHeight}) => handleLayoutMinHeight(minHeight)};
  align-content: center;
 }
  @media (max-width: 1920px) {
    width: ${props => props.thin ? "70vw" : "85vw"};
  }
  @media (max-width: 1400px) {
    width: ${props => props.thin ? "70vw" : "85vw"};
  }

  @media (max-width: 1100px) {
    width: ${props => props.thin ? "70vw" : "85vw"};
  }

  @media (max-width: 800px) {
    min-height: auto;
    width: 90%;
    grid-template-columns: 1fr;
  }

  ${props => props.sectionPadding === "mobile" && css`
    @media (max-width: 800px) {
      padding: 2vh 0 2vh 0;
    }
  `}

  ${props => props.sectionPadding === "mobileFirst" && css`
    @media (max-width: 800px) {
      padding: 10vh 0 2vh 0;
    }
  `}

`

export const InlineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${({gridGap}) => handleGridGap(gridGap)};
  justify-content: stretch;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem 1.5rem;
  }
`

export const Col = styled.div`
  width: 100%;
  display: ${props => props.grid ? "grid" : ""};
  grid-column: ${({span}) => handleGridColumn(span)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  align-content: ${({alignContent}) => handleAlignContent(alignContent)};
  justify-content: ${({justifyContent}) => handleJustifyContent(justifyContent)};

  @media screen and (max-width: 800px) {
    grid-column: 1/-1 !important;
  }
`
export const FormCol = styled.div`
  width: 100%;
  display: ${props => props.grid ? "grid" : ""};
  grid-column: ${({span}) => handleGridColumn(span)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  align-content: ${({alignContent}) => handleAlignContent(alignContent)};
  justify-content: ${({justifyContent}) => handleJustifyContent(justifyContent)};

  @media screen and (max-width: 1400px) {
    grid-column: span 6 !important;
  }
  @media screen and (max-width: 1100px) {
    grid-column: 1/-1 !important;
  }
`
export const FormImageCol = styled.div`
  width: 100%;
  display: ${props => props.grid ? "grid" : ""};
  grid-column: ${({span}) => handleGridColumn(span)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  align-content: ${({alignContent}) => handleAlignContent(alignContent)};
  justify-content: ${({justifyContent}) => handleJustifyContent(justifyContent)};

  @media screen and (max-width: 1400px) {
    grid-column: span 6 !important;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`
export const ActiveCol = styled.div`
  width: 100%;
  display: ${props => props.grid ? "grid" : ""};
  grid-column: ${({span}) => handleGridColumn(span)};
  margin-bottom: ${({marginBottom}) => handleMarginBottom(marginBottom)};
  margin-top: ${({marginTop}) => handleMarginTop(marginTop)};
  align-content: ${({alignContent}) => handleAlignContent(alignContent)};
  justify-content: ${({justifyContent}) => handleJustifyContent(justifyContent)};

  @media screen and (max-width: 1350px) {
    grid-column:span 4 !important;
  }
  @media screen and (max-width: 1150px) {
    grid-column:span 6 !important;
  }
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