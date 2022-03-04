import styled from "styled-components";

export const SideNavigationWrapper = styled.nav`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 2%;
  white-space: nowrap;
  background: transparent;
  z-index: 15;

  @media screen and (max-width: 800px) {
    right: -18vw;
  }
`

export const SideNavigationContainer = styled.ul`
  background-color: white;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 24px;
  font-size: 18px;
  display: grid;
  justify-items: center;
  grid-template-columns: 30px;

  ul li a {
    display: block;
    font-weight: 400;
    color: white;
    text-decoration: none;
    animation: CurrentNavLeave 0.2s linear forwards;
    text-align: right;
    line-height: 23px;
  }

  @media screen and (max-width: 800px) {
    ul li a {
      font-size: 0;
      color: transparent;
      line-height: 12px;
    }
  }
`