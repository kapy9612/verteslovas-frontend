import React from 'react';
import {Carousel} from "react-responsive-carousel";

import SectionLayoutGridWedding from "../../atoms/layout/SectionLayoutGridWedding";

import {H5AboutUs, Title} from "../../atoms/styled/typography/typographyComponents";
import {Container, Icon, BodyContainer} from "../styled/about-us-section/aboutussectionComponents";
import "../../../css/carousel.css";
import {Col} from "../../atoms/styled/layout/layoutComponents";

const AboutUsSection = ({image, title, cards}) => {
    return (
        <SectionLayoutGridWedding background={"whitesmoke"} id="about-us-section" >
            <Col >
                <Title textAlign={"center"} marginBottom={"medium"}>{title}</Title>
                <Container>
                    <Icon>
                        <img src={image} alt={"kép"}/>
                    </Icon>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={true}
                              transitionTime={1000}>
                        {cards.map((item, index) => (
                            <BodyContainer marginBottom={"small"} key={index}>
                                <H5AboutUs marginBottom={"small"}>{item.name}</H5AboutUs>
                                {item.description}
                            </BodyContainer>
                        ))}
                    </Carousel>
                </Container>
            </Col>
        </SectionLayoutGridWedding>
    );
};

export default AboutUsSection;