import React from 'react';
import {ActiveCardContainer, ActiveCardContentWrapper, ActiveCardImg} from "../styled/cards/cardComponents";
import {Body} from "../../atoms/styled/typography/typographyComponents";

const ActiveCard = ({title, description, price, image}) => {
    return (
        <ActiveCardContainer>
            <ActiveCardImg image={image}/>
            <ActiveCardContentWrapper>
                <Body weight="bold" color="black" textAlign="center" marginBottom="small">
                    {title}
                </Body>
                <Body color="dark-grey" textAlign="center">
                    {description}
                </Body>
                <Body color="dark-grey" textAlign="center">
                    {price}
                </Body>
            </ActiveCardContentWrapper>
        </ActiveCardContainer>
    );
};

export default ActiveCard;