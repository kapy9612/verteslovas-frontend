import React from "react"

import {Background, BackgroundWedding, LayoutGrid, } from "../styled/layout/layoutComponents"

const SectionLayoutGridWedding = ({ children, background, id, customPadding, customMinHeight, thin}) => {

    return (
        <BackgroundWedding customBg={background}>
            <LayoutGrid id={id} customPadding={customPadding} minHeight={"customMinHeight"} thin={thin}>
                {children}
            </LayoutGrid>
        </BackgroundWedding>
    )
}

export default SectionLayoutGridWedding