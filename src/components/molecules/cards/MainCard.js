import React from 'react';
import {
    MainCardButton,
    MainCardContainer
} from "../styled/cards/cardComponents";
import {Body, Header2} from "../../atoms/styled/typography/typographyComponents";
import {StyledCarouselMobile} from "../../organizms/styled/card-section/cardSectionComponents";
import {Img} from "../../atoms/styled/image/imageComponents";

const MainCard = ({title, description, color, sand, slug, name, images}) => {
    return (
        <MainCardContainer color={color}>
            <Header2 marginBottom="small" textAlign="center" sand={sand}>{title}</Header2>
            {images &&
            <StyledCarouselMobile
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                transitionTime={1000}
            >
                {images.map((pic, index) => (
                    <Img src={pic.localFile.publicURL} key={index}/>
                ))}
            </StyledCarouselMobile>
            }
            <Body>{description}</Body>
            <MainCardButton to={slug}>{name}</MainCardButton>
        </MainCardContainer>

    );
};

export default MainCard;