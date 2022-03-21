import React, {useEffect, useState} from "react"
import {Link} from "gatsby"
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import {useLocation} from "@reach/router";

import {
    MenuItemSubmenuWrapper, NavbarButtonWrapper,
    NavbarContainer,
    NavbarInnerContainer,
    NavbarLogo,
    NavbarMenuItem, NavbarMenuItemHoverContainer, NavbarMenuItemWithSubmenuWrapper,
    NavbarMenuItemWrapper, NavbarSubMenuItem
} from "../styled/navbar/navbarComponents"
import {Body} from "../../atoms/styled/typography/typographyComponents"

import logo from "../../../../static/assets/verteslovas_logo.png"
import logo_camp from "../../../../static/assets/verteslovas_logo_camp.png"

const Navbar = ({menus, isCamp}) => {

    const { pathname } = useLocation()

    const [over, setOver] = useState(
        {
            value: false,
            current: "-1"
        }
    )

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
                    <NavbarLogo src={isCamp ? logo_camp : logo} alt="logo"/>
                </Link>
                <NavbarMenuItemWrapper>
                    {menus.map((item, index) => (item.hasSubmenu ?
                            <NavbarMenuItemHoverContainer key={index} over={over} current={over.current} id={index}>
                                {item.slug ?
                                    <NavbarMenuItem to={item.slug} active={pathname === item.slug ? "true" : ""}>
                                        <Body color="black">
                                            {item.name}
                                        </Body>
                                    </NavbarMenuItem>
                                    :
                                    <NavbarMenuItemWithSubmenuWrapper>
                                        <Body color="black">
                                            {item.name}
                                        </Body>
                                    </NavbarMenuItemWithSubmenuWrapper>
                                }
                                <MenuItemSubmenuWrapper
                                    className={"open-menu"}
                                    onMouseOver={() => setOver({value: true, current: index})}
                                    onMouseLeave={() => setOver({value: false, current: "-1"})}
                                >
                                    {item.submenu.map((subItem, subIndex) =>
                                        <NavbarSubMenuItem to={subItem.slug} key={subIndex}>
                                            <Body color="black">
                                                {subItem.name}
                                            </Body>
                                        </NavbarSubMenuItem>
                                    )}
                                </MenuItemSubmenuWrapper>
                            </NavbarMenuItemHoverContainer>
                            :
                            <NavbarMenuItem key={index} to={item.slug} active={pathname === item.slug ? "true" : ""}>
                                <Body color="black">
                                    {item.name}
                                </Body>
                            </NavbarMenuItem>
                    ))}
                </NavbarMenuItemWrapper>
                <NavbarButtonWrapper>
                    <Link to={"/"}>
                        <IconButton aria-label="delete">
                            <SvgIcon fontSize={"large"}>
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                            </SvgIcon>
                        </IconButton>
                    </Link>
                </NavbarButtonWrapper>
            </NavbarInnerContainer>
        </NavbarContainer>
    )
}

export default Navbar