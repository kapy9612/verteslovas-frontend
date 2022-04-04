import React from "react"

import { Background, LayoutGrid } from "../styled/layout/layoutComponents"

const SectionLayoutGrid = ({ children, background, id, customPadding, customMinHeight, thin, repeatable}) => {

  return (
    <Background customBg={background} id={id}>
      <LayoutGrid customPadding={customPadding} minHeight={customMinHeight} thin={thin} sectionPadding={repeatable}>
        {children}
      </LayoutGrid>
    </Background>
  )
}

export default SectionLayoutGrid