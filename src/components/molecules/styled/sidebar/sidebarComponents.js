import styled from "styled-components"

import { Body } from "../../../atoms/styled/typography/typographyComponents"

export const SidebarContainer = styled.nav`
  display: none;
  @media screen and (max-width: 800px) {
    display: grid;
  }
`

export const SidebarLogo = styled.img`
  position: fixed;
  z-index: 1000;
  top: 1.25rem;
  left: 5%;
  cursor: pointer;
  display: block;
  height: 4rem;
  max-width: 100%;
`

export const HamburgerWrapper = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`

export const HamburgerIconWrapper = styled.div`
  position: fixed;
  z-index: 1001;
  top: 2.5rem;
  right: 7%;
  width: 2rem;
  height: 1.5rem;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: block;
`

export const HamburgerIcon = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--dark-grey);
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transition: 0.25s ease-in-out;
  ${props => {
    if (props.first) {
      return `
        top: 0px;
    `
    } else if (props.mid) {
      return `
        top: 6px;
    `
    } else if (props.last) {
      return `
        top: 12px;
    `
    } else if (props.open1) {
      return `
        top: 12px;
        width: 0%;
        left: 50%;
        border: none;
    `
    } else if (props.open2) {
      return `
        top: 6px;
        transform: rotate(45deg) !important;
        background: var(--black) !important;
        border: none;
    `
    } else if (props.open3) {
      return `
        top: 6px;
        transform: rotate(-45deg) !important;
        background: var(--black) !important;
        border: none;
    `
    } else if (props.open4) {
      return `
        top: 18px;
        width: 0%;
        left: 50%;
        border: none;
    `
    }
  }}
`

export const SidebarBox = styled.div`
  align-content: start;
  grid-auto-flow: row;
  grid-gap: 1rem 0;
  background: var(--whitesmoke-background);
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 999;
  margin-left: -100%;
  display: grid;
  opacity: 0;
  box-sizing: border-box;
  padding: 8rem 3rem 8rem 3rem;

  ${props => {
    if (props.open) {
      return `
        opacity: 1;
        animation-name: MenuOpen;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
        overflow-y: auto;
        @keyframes MenuOpen {
            0% {
                margin-left: -100%;
            }
            100% {
                margin-left: 0%;
            }
        }
    `
    } else if (props.close) {
      return `
        opacity: 1;
        animation-name: MenuClose;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        @keyframes MenuClose {
            0% {
                margin-left: 0%;
            }
            100% {
                margin-left: -100%;
            }
        }
    `
    }
  }}
`

export const SidebarHeader4 = styled(Body)`
  transition: 0.2s opacity;
  font-size: 1.5rem;
  
  &:hover {
    opacity: 0.6;
  }
`

export const SidebarSubmenu = styled.div`
  display: grid;
  grid-template-columns: auto 2rem;
  cursor: pointer;

  img{
    justify-self: end !important;
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s, invert 0.3s;
    cursor: pointer;
    transform: ${props => props.active ? "rotate(90deg)" : ""};
    place-self: center;
  }
`

export const SidebarSubmenuPanel = styled.div`
  display: ${props => props.open ? "block" : "none"};;
  max-height: ${props => props.open ? 50 + "rem" : "0"};
  overflow: ${props => props.open ? "" : "hidden"};
  transition:  ${props => props.open ? "max-height 0.2s ease-out" : "max-height 0.2s ease-in"};
`

export const SidebarSubmenuItemsWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  box-sizing: border-box;
  padding: 0.5rem 0 0 1rem;
  margin-bottom: 1rem;
  
  &:first-child{
    padding: 0 0 0 1rem;
  }
  
  &:last-child{
    margin-bottom: 0;
  }
`

export const SidebarBody = styled(Body)`
  transition: 0.2s color;
  
  &:hover {
    color: var(--light-orange) !important;
  }
`

export const SidebarArrow = styled.img`
  transform: ${props => props.open ? "rotate(90deg)" : "rotate(0)"};
  transition: 0.2s transform;
`