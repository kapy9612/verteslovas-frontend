import styled from "styled-components";

export const MapDiv = styled.div`
  background-image: url("/assets/vlTérkép.png");
  background-size: cover;
  height: 47rem;
  background-position: center;
  @media (max-width: 1501px) {
    height:40rem;
  }
  @media (max-width: 1400px) {
   display: none;
    height: 0;
  }
  
`
export const LinkContainer = styled.div`
  display: grid;
  height: 100%;
  margin:auto;
  align-content: end;
  padding-left:2rem;
`
export const Links = styled.a`
  
  font-size:1.8rem;
  font-family: 'Raleway', sans-serif;
  color:black;
  padding: 0.2rem;
  
  &:hover{
    cursor: pointer;
    font-weight: bold;
  }
 
`
export const TitleMobil = styled.div`
  
  display: none;
  @media (max-width: 1400px) {
    display: grid;
    max-height: 20px !important;
    padding: 0;
    margin:auto;
  }
 
`



