import React, {useEffect, useLayoutEffect} from "react";

import {
    SideNavigationContainer,
    SideNavigationWrapper
} from "./sideNavigationComponents";

import "./sidenavigation.css";

const SideNavigation = () => {

    useLayoutEffect(() => {
        let SideNavigation = document.getElementById("navigation-container");
        const x = document.getElementById("layout-components").childNodes
        for (let i = 0; i < x.length; i++) {
            if (x[i].id) {
                let li = document.createElement("li")
                li.key = i
                let a = document.createElement("a")
                a.href = "#" + x[i].id
                let span = document.createElement("span")
                span.className = "dot"
                a.appendChild(span)
                li.appendChild(a)
                SideNavigation.appendChild(li)
            }
        }
    }, [])


    useEffect(() => {
        let SideNavigation = document.getElementById("navigation-container")
        const x = document.getElementById("layout-components").childNodes
        const offsetsTop = []
        const offsetsHeight = []
        let counter = 0
        for (let i = 0; i < x.length; i++) {
            if (x[i].id && !x[i].id.includes("modal")) {
                offsetsTop[counter] = x[i].offsetTop
                offsetsHeight[counter] = x[i].offsetHeight
                counter++
            }
        }
        window.addEventListener('scroll', (event) => {
            let fromTop = window.scrollY + 50;
            SideNavigation.childNodes.forEach((node, index) => {
                if (fromTop >= offsetsTop[index] && (offsetsTop[index] + offsetsHeight[index]) > fromTop) {
                    node.children[0].children[0].className = "dot dot--active"
                } else {
                    node.children[0].children[0].className = "dot"
                }
            })
        })
    })

    return (
        <SideNavigationWrapper id="SideNavigation">
            <nav>
                <SideNavigationContainer id="navigation-container"/>
            </nav>
        </SideNavigationWrapper>
    )
}

export default SideNavigation