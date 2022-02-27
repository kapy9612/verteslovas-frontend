import React from 'react';
import parse from "html-react-parser"

import {
    ChildCardContainer,

} from "../styled/cards/cardComponents";
import {Body, Header2} from "../../atoms/styled/typography/typographyComponents";

const ChildCard = ({title, description,color}) => {
    return (
        <ChildCardContainer color={color}>
            <Header2 marginBottom="small" textAlign="center" weight={"bolder"} sand={"true"}>{title}</Header2>
            <Body>{parse(description)}</Body>
        </ChildCardContainer>
    );
};

export default ChildCard;