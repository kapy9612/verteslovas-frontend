import React from 'react';
import {
    ChildCardContainer,

} from "../styled/cards/cardComponents";
import {Body, Header2, Header3} from "../../atoms/styled/typography/typographyComponents";

const ChildCard = ({title, description,color}) => {
    return (
        <ChildCardContainer color={color}>
            <Header2 marginBottom="small" textAlign="center" sand={"true"}>{title}</Header2>
            <Body>{description}</Body>
        </ChildCardContainer>
    );
};

export default ChildCard;