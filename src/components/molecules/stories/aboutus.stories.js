import React from "react";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import AboutUs from "../aboutUs/AboutUs";

import {Col} from "../../atoms/styled/layout/layoutComponents";

import image from "./dummy/icon.png"


export default {
    title: 'Molecules/AboutUs/ AboutUs',
    args: {
        image: image,
        description:"Buying the right telescope to take your love ofBuying the right telescope to take youBuying the right telescope to take youBuying the right telescope to take you astronomy to the next level is a big next step in the development of your passion for the stars.",
        name: "Kitti & Levente"
    }
};

export const aboutUs = ({...args}) => (
    <SectionLayoutGrid>
        <Col span={12}>
            <AboutUs  {...args}/>
        </Col>
    </SectionLayoutGrid>
);
