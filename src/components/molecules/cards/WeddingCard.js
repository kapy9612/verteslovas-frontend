import React from 'react';
import {WeddingCardContainer} from "../styled/cards/cardComponents";
import {Body, Header3} from "../../atoms/styled/typography/typographyComponents";

const WeddingCard = ({title, description, logo, color}) => {
    return (
        <WeddingCardContainer color={color} >
            <img src={logo} alt="logo"/>
            <Header3 color="black" textAlign="center" marginBottom="small">
                {title}
            </Header3>
            <Body color="dark-grey" textAlign="center" weight={"bolder"}>
                {description}
            </Body>
        </WeddingCardContainer>
    );
};

export default WeddingCard;