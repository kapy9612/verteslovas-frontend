import React from 'react';
import {Body, Header3, Header4, H5AboutUs} from "../../atoms/styled/typography/typographyComponents";
import {Carousel} from "react-responsive-carousel";
import {Container, Icon, BodyContainer} from "../styled/aboutUs/aboutusComponents";
import "../../../css/carousel.css";


const AboutUs = ({image, description, name}) => {
    return (
        <Container>
            <Icon>
                <img src={image}/>
            </Icon>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={true} transitionTime={1000}>
                <BodyContainer marginBottom={"small"}>
                    <H5AboutUs marginBottom={"small"}>{name}</H5AboutUs>
                    {description}
                </BodyContainer>
                <BodyContainer>
                    <H5AboutUs marginBottom={"small"}>{name}</H5AboutUs>
                    {description}
                </BodyContainer>
                <BodyContainer>
                    <H5AboutUs marginBottom={"small"}>{name}</H5AboutUs>
                    {description}
                </BodyContainer>
            </Carousel>
        </Container>

    );
};

export default AboutUs;