import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import IndexCard from "../../molecules/cards/IndexCard";

import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

import lovaglas from "../../../../static/assets/lovaglas4.png"
import gyerekek from "../../../../static/assets/gyerekek.png"
import eskuvo from "../../../../static/assets/eskuvo2.png"
import cegek from "../../../../static/assets/ceg2.png"
import csalad from "../../../../static/assets/csalad2.png"
import haz from "../../../../static/assets/haz.png"

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
                    logo={gyerekek}
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
                    logo={csalad}
                    slug={"/csaladoknak"}
                />
            </Col>
            <Col span={4}>
                <IndexCard
                    title={"Lovaglás"}
                    logo={lovaglas}
                    slug={"/lovaglas"}
                />
            </Col>

            <Col span={4}>
                <IndexCard
                    title={"Szállás"}
                    logo={haz}
                    slug={"/szallasok"}
                />
            </Col>
        </SectionLayoutGrid>
    );
};

export default IndexCardSection;