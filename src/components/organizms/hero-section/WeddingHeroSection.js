import React from 'react';
import {Body, Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {WeddingHeroContainer, WeddingHeroImage} from "../styled/hero-section/heroSectionComponents";

const WeddingHeroSection = ({title, description, image}) => {
    return (
        <SectionLayoutGrid customPadding={"firstElement"} id="wedding-hero-section">
            <Col justifyContent={"center"} grid>
                <Title textAlign={"center"} marginBottom={"medium"}>{title}</Title>
                <WeddingHeroContainer>
                    <WeddingHeroImage src={image}/>
                    <Body textAlign={"center"} marginTop={"medium"} weight={"bolder"}
                          marginBottom={"largest"}>{description}</Body>
                </WeddingHeroContainer>
            </Col>
        </SectionLayoutGrid>

    );
};

export default WeddingHeroSection;