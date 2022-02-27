import React from "react";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import Footer from "../footer/Footer";

import {Col} from "../../atoms/styled/layout/layoutComponents";

export default {
    title: 'Molecules/Footer/ Footer',
    args: {
        phone: "+36 1 0111111",
        email: "info@verteslovas.hu",
        address: "1221 kiskurutty utca 32",
        description:"Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars."
    }
};

export const footer = ({...args}) => (
    <SectionLayoutGrid>
        <Col span={12}>
            <Footer  {...args}/>
        </Col>

    </SectionLayoutGrid>
);
