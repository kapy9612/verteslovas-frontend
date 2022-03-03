import React from 'react';
import { H5AboutUs, Title} from "../../atoms/styled/typography/typographyComponents";
import {Carousel} from "react-responsive-carousel";
import {Container, Icon, BodyContainer} from "../styled/about-us-section/aboutussectionComponents";
import "../../../css/carousel.css";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import SectionLayoutGridWedding from "../../atoms/layout/SectionLayoutGridWedding";


const AboutUsSection = ({image, title, cards}) => {
    return (
        <SectionLayoutGridWedding background={"whitesmoke"}>
            <Col>
                <Title textAlign={"center"} marginBottom={"medium"}>{title}</Title>
                <Container>
                    <Icon>
                        <img src={image} alt={"kép"}/>
                    </Icon>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={true}
                              transitionTime={1000}>
                        {cards.map((item, index) => (
                            <BodyContainer marginBottom={"small"} key={index}>
                                <H5AboutUs marginBottom={"small"} >{item.name}</H5AboutUs>
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