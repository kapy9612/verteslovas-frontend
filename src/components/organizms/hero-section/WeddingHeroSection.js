import React from 'react';
import {Body, Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {WeddingHeroContainer, WeddingHeroImage} from "../styled/hero-section/heroSectionComponents";
import SectionLayoutGridWedding from "../../atoms/layout/SectionLayoutGridWedding";

const WeddingHeroSection = ({title, description, image}) => {
    return (
        <SectionLayoutGrid background={"whitesmoke"} customPadding={"firstElement"}>
            <Col justifyContent={"center"} grid>
                <Title textAlign={"center"} marginBottom={"medium"}>{title}</Title>

                <WeddingHeroContainer>
                    <WeddingHeroImage src={image}/>
                    <Body textAlign={"center"} marginTop={"medium"} weight={"bold"} marginBottom={"medium"}>{description}</Body>
                </WeddingHeroContainer>


            </Col>
        </SectionLayoutGrid>

    );
};

export default WeddingHeroSection;