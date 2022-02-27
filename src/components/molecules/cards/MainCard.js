import React from 'react';
import {
    MainCardContainer
} from "../styled/cards/cardComponents";
import {Body, Header2} from "../../atoms/styled/typography/typographyComponents";

const MainCard = ({title, description,color}) => {
    return (
        <MainCardContainer color={color}>
            <Header2 marginBottom="small" textAlign="center">{title}</Header2>
            <Body>{description}</Body>
        </MainCardContainer>

    );
};

export default MainCard;