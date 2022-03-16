import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import IndexCard from "../../molecules/cards/IndexCard";

import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

import logo from "../../../../static/assets/verteslovas_logo_camp3.png"
import eskuvo from "../../../../static/assets/eskuvo_index.png"
import cegek from "../../../../static/assets/verteslovas_logo.png"

const IndexCardSection = () => {
    return (
        <SectionLayoutGrid customMinHeight={"small"} background={"whitesmoke"}>
            <Col marginBottom="medium">
                <Title textAlign="center" sand={"true"}>
                    Vérteslovas Erdei<br/>
                    Iskola és Szabadidőpark
                </Title>
            </Col>
            <Col span={4}>
                <IndexCard
                    title={"Cégek"}
                    logo={cegek}
                    slug={"/cegeknek"}
                />
            </Col>
            <Col span={4}>
                <IndexCard
                    title={"Gyerekek"}
                    logo={logo}
                    slug={"/sajattaboraink"}
                />
            </Col>
            <Col span={4}>
                <IndexCard
                    title={"Esküvő"}
                    logo={eskuvo}
                    slug={"/eskuvo"}
                />
            </Col>
            <Col span={4}>
                <IndexCard
                    title={"Családok"}
                    logo={logo}
                    slug={"/csaladoknak"}
                />
            </Col>
            <Col span={4}>
                <IndexCard
                    title={"Lovaglás"}
                    logo={logo}
                    slug={"/lovaglas"}
                />
            </Col>
            <Col span={4}>
                <IndexCard
                    title={"Szállás"}
                    logo={logo}
                    slug={"/szallas"}
                />
            </Col>
        </SectionLayoutGrid>
    );
};

export default IndexCardSection;