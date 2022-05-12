import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col} from "../../atoms/styled/layout/layoutComponents";
import {LinkContainer, Links, MapDiv, TitleMobil} from "../styled/map-section/MapSectionComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

import "../../../css/carousel.css";

const MapSection = ({list}) => {
    return (
        <SectionLayoutGrid thin={false} customMinHeight={"smaller"}>
            <Col >
                <MapDiv>
                    <LinkContainer>
                        {list && list.map((item, index) => (
                            <Links href={item.slug} key={index}>{item.name}</Links>
                        ))}
                    </LinkContainer>
                </MapDiv>
                <TitleMobil>
                    <Title textAlign="center" marginBottom="medium" marginTop={"medium"} sand={true}>Szállások</Title>
                </TitleMobil>

            </Col>
        </SectionLayoutGrid>
    );
};

export default MapSection;