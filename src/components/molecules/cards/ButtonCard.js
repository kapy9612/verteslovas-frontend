import React from 'react';
import {
    ButtonCardButtonWrapper,
    ButtonCardContainer,
    ButtonCardContentWrapper,
    ButtonCardImg
} from "../styled/cards/cardComponents";
import {Body, Header3} from "../../atoms/styled/typography/typographyComponents";
import {ButtonLink} from "../../atoms/styled/button/buttonComponents";

const ButtonCard = ({title, description, image,button}) => {
    return (
        <ButtonCardContainer>
            <ButtonCardImg image={image}/>
            <ButtonCardContentWrapper>
                <Header3 textAlign="center" marginBottom="small" >
                    {title}
                </Header3>
                <Body color="dark-grey" textAlign="center">
                    {description}
                </Body>
                <ButtonCardButtonWrapper>
                    <ButtonLink to={button.slug} variant="whitesmoke">{button.name}</ButtonLink>
                </ButtonCardButtonWrapper>
            </ButtonCardContentWrapper>

        </ButtonCardContainer>

    );
};

export default ButtonCard;