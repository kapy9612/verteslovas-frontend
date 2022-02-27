import React from 'react';
import {Body, Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {WeddingHeroImage} from "../styled/hero-section/heroSectionComponents";

const WeddingHeroSection = ({title, description, image}) => {
    return (
        <SectionLayoutGrid background={"whitesmoke"} customPadding={"firstElement"}>
            <Col justifyContent={"center"} grid>
                <Title textAlign={"center"} marginBottom={"larger"}>{title}</Title>
                <WeddingHeroImage src={image}/>
                <Body textAlign={"center"} marginTop={"medium"} >{description}</Body>
            </Col>
        </SectionLayoutGrid>

    );
};

export default WeddingHeroSection;