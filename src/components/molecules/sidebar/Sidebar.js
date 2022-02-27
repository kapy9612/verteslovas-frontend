import React, {useState} from "react"
import {Link} from "gatsby"

import {
    HamburgerIcon,
    HamburgerIconWrapper,
    HamburgerWrapper,
    SidebarBox,
    SidebarContainer,
    SidebarHeader4,
    SidebarLogo,
} from "../styled/sidebar/sidebarComponents"

import logo from "../../../../static/assets/verteslovas_logo.png"

const Sidebar = ({menus}) => {

    const [isSidebar, setIsSidebar] = useState(false)
    const [counter, setCounter] = useState(0)

    function menuOpen() {
        setIsSidebar(!isSidebar)
        setCounter(counter + 1)
        if (!isSidebar) {
            //document.getElementsByTagName("body")[0].style.overflowY = "hidden"
        } else if (isSidebar) {
            document.getElementsByTagName("body")[0].style.overflowY = "auto"
        }
    }

    return (
        <SidebarContainer>
            <Link to={"/"}>
                <SidebarLogo src={logo} alt="logo"/>
            </Link>
            <HamburgerWrapper onClick={() => menuOpen()} aria-hidden={"true"}>
                <HamburgerIconWrapper>
                    <HamburgerIcon first={!isSidebar} open1={isSidebar}/>
                    <HamburgerIcon mid={!isSidebar} open2={isSidebar}/>
                    <HamburgerIcon mid={!isSidebar} open3={isSidebar}/>
                    <HamburgerIcon last={!isSidebar} open4={isSidebar}/>
                </HamburgerIconWrapper>
            </HamburgerWrapper>
            <SidebarBox open={isSidebar} close={counter !== 0 && !isSidebar}>
                {menus.map((item, index) =>
                    <Link to={item.slug} key={index}>
                        <SidebarHeader4 color="black">
                            {item.name}
                        </SidebarHeader4>
                    </Link>
                )}
            </SidebarBox>
        </SidebarContainer>
    )
}

export default Sidebar