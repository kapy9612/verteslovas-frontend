import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import {
  NavbarContainer,
  NavbarInnerContainer,
  NavbarLogo,
  NavbarMenuItem,
  NavbarMenuItemWrapper
} from "../styled/navbar/navbarComponents"
import { Body } from "../../atoms/styled/typography/typographyComponents"

import logo from "../../../../static/assets/verteslovas_logo.png"
import logo_camp from "../../../../static/assets/verteslovas_logo_camp.png"

const Navbar = ({ menus, isCamp }) => {

  const [scrollDir, setScrollDir] = useState("")

  useEffect(() => {
    const threshold = 5
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up")
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll)
    if (scrollDir === "scrolling up") {
      //document.getElementById("headerNavigation").style.backgroundColor = "#001c44"
      document.getElementById("headerNavigation").style.marginTop = "0"
    } else if (scrollDir === "scrolling down") {
      document.getElementById("headerNavigation").style.marginTop = "-6rem"
    }
    return () => window.removeEventListener("scroll", onScroll)

  }, [scrollDir])

  return (
    <NavbarContainer id="headerNavigation">
      <NavbarInnerContainer>
        <Link to={"/"}>
          <NavbarLogo src={isCamp ? logo_camp : logo} alt="logo" camp={isCamp ? "true" : ""} />
        </Link>
        <NavbarMenuItemWrapper>
          {menus.map((item, index) =>
              <NavbarMenuItem key={index} to={item.slug}>
                <Body color="black">
                  {item.name}
                </Body>
              </NavbarMenuItem>
          )}
        </NavbarMenuItemWrapper>
      </NavbarInnerContainer>
    </NavbarContainer>
  )
}

export default Navbar