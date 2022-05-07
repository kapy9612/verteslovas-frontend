import React from 'react';

import "../../../css/carousel.css";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {LinkContainer, Links, MapDiv, TitleMobil} from "../styled/map-section/MapSectionComponents";
import {Link} from "gatsby";
import {Title} from "../../atoms/styled/typography/typographyComponents";

const MapSection = () => {
    return (
        <SectionLayoutGrid thin={false} customMinHeight={"smaller"}>
            <Col >
                <MapDiv>
                    <LinkContainer>
                        <Links href={"#main-card-repeatable-section0"}>16 - Lovasházak</Links>
                        <Links href={"#main-card-repeatable-section1"}>23 - Apartman</Links>
                        <Links href={"#main-card-repeatable-section2"}>24 - Tetőtéri birodalom</Links>
                        <Links href={"#main-card-repeatable-section3"}>25,26 - Muskátli parasztház</Links>
                        <Links href={"#main-card-repeatable-section4"}>32 - Jurta falva</Links>
                        <Links href={"#main-card-repeatable-section5"}>34 - Metzger-ház</Links>
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