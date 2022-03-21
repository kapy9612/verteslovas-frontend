import React from 'react';

import {Header3} from "../../atoms/styled/typography/typographyComponents";
import {IndexCardWrapper} from "../styled/cards/cardComponents";

const IndexCard = ({slug, title, logo}) => {
    return (
        <IndexCardWrapper to={slug}>
            <Header3 textAlign="center" color="black" sand={"true"} marginBottom={"smaller"}>
                {title}
            </Header3>
            <img src={logo} alt="menu-logo"/>
        </IndexCardWrapper>
    );
};

export default IndexCard;