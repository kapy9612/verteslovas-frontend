import React from "react";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import WeddingCard from "../cards/WeddingCard";

import {Col} from "../../atoms/styled/layout/layoutComponents";

import logo from "./dummy/wedding_card_dummy_logo.svg"

export default {
    title: 'Molecules/Cards/Wedding Card',
    args: {
        logo: logo,
        title: "Szállás",
        description: "A helyszínen 80 főnek tudunk szállást biztosítani. A helyszínen 80 főnek tudunk szállást biztosítani.",
    }
};

export const weddingCard = ({...args}) => (
    <SectionLayoutGrid>
        <Col span={3} grid>
            <WeddingCard  {...args}/>
        </Col>
        <Col span={3} grid>
            <WeddingCard  {...args}/>
        </Col>
        <Col span={3} grid>
            <WeddingCard  {...args}/>
        </Col>
        <Col span={3} grid>
            <WeddingCard  {...args}/>
        </Col>
    </SectionLayoutGrid>
);
