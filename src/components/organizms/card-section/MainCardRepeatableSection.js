import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import MainCard from "../../molecules/cards/MainCard";

import {
    MainRightCardContainer,
    MainLeftCardContainer,
    MainCardSectionContainer, StyledCarousel, StyledCarouselLeft
} from "../styled/card-section/cardSectionComponents"
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";
import {Img} from "../../atoms/styled/image/imageComponents";

const MainCardRepeatableSection = ({card, title, isRight, id,sand}) => {
        return (
            <SectionLayoutGrid background={"whitesmoke"} id={`main-card-repeatable-section${id}`} >
                <Col>
                    <Title textAlign="center" marginBottom="medium">
                        {title}
                    </Title>
                </Col>
                {isRight ?
                    <Col>
                        <MainCardSectionContainer>
                            <StyledCarouselLeft autoPlay={true} infiniteLoop={true} showThumbs={false}
                                                transitionTime={1000}>
                                {card.image.map((pic, index) => (
                                    <Img src={pic.localFile.publicURL} key={index}/>
                                ))}
                            </StyledCarouselLeft>
                            <MainRightCardContainer>
                                <MainCard
                                    color={isRight ? "beige" : "grey"}
                                    title={card.title}
                                    description={card.description}
                                    sand={sand}
                                    images={card.image}
                                />
                            </MainRightCardContainer>
                        </MainCardSectionContainer>
                    </Col>
                    :
                    <Col>
                        <MainCardSectionContainer>
                            <MainLeftCardContainer>
                                <MainCard
                                    color={isRight ? "beige" : "grey"}
                                    title={card.title}
                                    description={card.description}
                                    sand={sand}
                                    images={card.image}
                                />
                            </MainLeftCardContainer>
                            <StyledCarousel autoPlay={true} infiniteLoop={true} showThumbs={false}
                                            transitionTime={1000}>
                                {card.image.map((pic, index) => (
                                    <Img src={pic.localFile.publicURL} key={index}/>
                                ))}
                            </StyledCarousel>
                        </MainCardSectionContainer>
                    </Col>
                }
            </SectionLayoutGrid>
        );
    }
;

export default MainCardRepeatableSection;