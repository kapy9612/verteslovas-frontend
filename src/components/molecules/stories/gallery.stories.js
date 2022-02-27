import React from "react";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import image from "./dummy/gallery_dummy.png"
import Gallery from "../gallery/Gallery";


export default {
    title: 'Molecules/Gallery/Gallery',
    args: {
        images:[
            {image:image},
            {image:image},
            {image:image},
            {image:image},
            {image:image},
            {image:image},
            {image:image},
            {image:image},
            {image:image},
        ]


    },

};

export const gallery = ({...args}) => (
    <SectionLayoutGrid>
        <Col span={12} grid>
            <Gallery  {...args}/>
        </Col>
    </SectionLayoutGrid>
);