import React from 'react';
import {
    MainCardButton,
    MainCardContainer
} from "../styled/cards/cardComponents";
import {Body, Header2} from "../../atoms/styled/typography/typographyComponents";

const MainCard = ({title, description, color, sand, slug, name}) => {
    return (
        <MainCardContainer color={color}>
            <Header2 marginBottom="small" textAlign="center" sand={sand}>{title}</Header2>
            <Body>{description}</Body>
            <MainCardButton to={slug}>{name}</MainCardButton>
        </MainCardContainer>

    );
};

export default MainCard;