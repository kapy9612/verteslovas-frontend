import React from "react"

import {BackgroundWedding, LayoutGrid } from "../styled/layout/layoutComponents"

const SectionLayoutGridWedding = ({ children, background, id, customPadding, customMinHeight, thin}) => {

    return (
        <BackgroundWedding customBg={background} id={id} >
            <LayoutGrid customPadding={customPadding} minHeight={"customMinHeight"} thin={thin}>
                {children}
            </LayoutGrid>
        </BackgroundWedding>
    )
}

export default SectionLayoutGridWedding