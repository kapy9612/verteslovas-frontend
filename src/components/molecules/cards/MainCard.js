import React from 'react';
import {
    MainCardContainer
} from "../styled/cards/cardComponents";
import {Body, Header2, Header3} from "../../atoms/styled/typography/typographyComponents";
import {ButtonLink} from "../../atoms/styled/button/buttonComponents";

const MainCard = ({title, description,color}) => {
    return (
        <MainCardContainer color={color}>
            <Header2 marginBottom="small" textAlign="center">{title}</Header2>
            <Body>{description}</Body>
        </MainCardContainer>

    );
};

export default MainCard;