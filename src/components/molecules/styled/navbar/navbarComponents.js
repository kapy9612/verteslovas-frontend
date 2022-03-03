import styled from "styled-components"
import { Link } from "gatsby"

export const NavbarContainer = styled.div`
  background: white;
  box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.25);
  width: 100%;
  margin-top: 0;
  transition: margin-top 0.2s ease-out;
  position: fixed;
  z-index: 101;
  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const NavbarInnerContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  max-width: 90%;
  margin: auto;
  height: 6rem;
  align-items: center;
`

export const NavbarLogo = styled.img`
  height: 5rem;
  cursor: pointer;
  max-width: 100%;
  margin-bottom: ${props => props.camp && "-2.6rem"};
`

export const NavbarMenuItemWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-self: end !important;
  align-self: stretch;
`

export const NavbarMenuSubMenuContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem 0;
`

export const NavbarMenuItem = styled(Link)`
  display: grid;
  align-content: center;
  padding: 0 1rem 0 1rem;
  height: 100%;

  p {
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: border-bottom-color 0.4s;

    &:hover {
      border-bottom: 2px solid black;
    }
  }
`

export const NavbarButtonWrapper = styled.div`
  display: grid;
  margin-bottom: 2px;
`

export const NavbarMenuItemHoverContainer = styled.div`
  cursor: pointer;
  
  .open-menu {
    display: none;
    transition: 0.2s display;
  }

  &:hover {
    > .open-menu {
      display: grid;
      box-shadow: inset 0 0 0.75rem rgba(0, 0, 0, 0.25);
    }
  }

  &:nth-of-type(${props => props.current + 1}) {
    p {
      border-bottom: ${props => props.over && "2px solid var(--black)"};
    }
  }
`

export const NavbarMenuItemWithSubmenuWrapper = styled.div`
  display: grid;
  cursor: pointer;
  height: 100%;
  align-content: center;
  padding: 0 1rem 0 1rem;

  p {
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: border-bottom-color 0.4s;

    &:hover {
      border-bottom: 2px solid black;
    }
  }
`

export const MenuItemSubmenuWrapper = styled.div`
  display: grid;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0 0 0.625rem 0.625rem;
  position: absolute;
  top: 6rem;
  width: 18rem;
  z-index: 100;
  cursor: auto;
  box-sizing: border-box;
  padding: 2rem;
  grid-row-gap: 1.5rem;
  margin: auto;
  justify-items: start;
  align-items: start;
`

export const NavbarSubMenuItem = styled(Link)`
  
  p {
    transition: font-weight 0.1s;
    border-bottom: 2px solid transparent !important;
    margin-bottom: -2px;

    &:hover {
      font-weight: bold;
    }
  }
`

