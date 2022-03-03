import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {
    MainCardLeftImg,
    MainRightCardContainer,
    MainLeftCardContainer,
    MainCardSectionContainer, StyledCarousel, StyledCarouselLeft
} from "../styled/card-section/cardSectionComponents"
import {Col} from "../../atoms/styled/layout/layoutComponents";
import MainCard from "../../molecules/cards/MainCard";
import { Title} from "../../atoms/styled/typography/typographyComponents";
import {Img} from "../../atoms/styled/image/imageComponents";

const MainCardRepeatableSection = ({card, title}) => {
        return (
            <SectionLayoutGrid background={"whitesmoke"}>
                <Col>
                    <Title textAlign="center" marginBottom="medium">
                        {title}
                    </Title>
                </Col>
                {card && card.map((item, index) => (index % 2 === 1 ?
                        <Col>
                            <MainCardSectionContainer>
                                <StyledCarouselLeft   autoPlay={true} infiniteLoop={true} showThumbs={false} transitionTime={1000}>
                                    {item.image.map((pic, index) => (
                                        <Img src={pic.localFile.publicURL} key={index}/>
                                    ))}
                                </StyledCarouselLeft>
                                <MainRightCardContainer>
                                    <MainCard
                                        color={index % 2 === 1 ? "beige" : "grey"}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </MainRightCardContainer>
                            </MainCardSectionContainer>
                        </Col>
                        :
                        <Col>
                            <MainCardSectionContainer>
                                <MainLeftCardContainer>
                                    <MainCard
                                        color={index % 2 === 1 ? "beige" : "grey"}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </MainLeftCardContainer>
                                <StyledCarousel autoPlay={true} infiniteLoop={true} showThumbs={false} transitionTime={1000} >
                                    {item.image.map((pic, index) => (
                                        <Img src={pic.localFile.publicURL} key={index}/>
                                    ))}
                                </StyledCarousel>
                            </MainCardSectionContainer>
                        </Col>
                ))}
            </SectionLayoutGrid>
        );
    }
;

export default MainCardRepeatableSection;