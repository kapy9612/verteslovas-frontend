import React from 'react';
import {WeddingCardContainer} from "../styled/cards/cardComponents";
import {Body, Header3} from "../../atoms/styled/typography/typographyComponents";

const WeddingCard = ({title, description, logo}) => {
    return (
        <WeddingCardContainer >
            <img src={logo} alt="logo"/>
            <Header3 color="black" textAlign="center" marginBottom="small">
                {title}
            </Header3>
            <Body color="dark-grey" textAlign="center">
                {description}
            </Body>
        </WeddingCardContainer>
    );
};

export default WeddingCard;