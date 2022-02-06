import React from "react";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import ActiveCard from "../cards/ActiveCard";

import {Col} from "../../atoms/styled/layout/layoutComponents";

import image from "./dummy/active_card_dummy.png"

export default {
    title: 'Molecules/Cards/Active Card',
    args: {
        image: image,
        title: "Bungee trambulin",
        description: "Maximum 80 kg",
        price: "1.200,- Ft/fő"
    }
};

export const activeCard = ({...args}) => (
    <SectionLayoutGrid>
        <Col span={3}>
            <ActiveCard  {...args}/>
        </Col>
        <Col span={3}>
            <ActiveCard  {...args}/>
        </Col>
        <Col span={3}>
            <ActiveCard  {...args}/>
        </Col>
        <Col span={3}>
            <ActiveCard  {...args}/>
        </Col>
    </SectionLayoutGrid>
);
