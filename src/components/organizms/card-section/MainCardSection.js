import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import MainCard from "../../molecules/cards/MainCard";

import {
    MainRightCardContainer,
    MainLeftCardContainer,
    MainCardRightImg,
    MainCardSectionContainer,  MainCardMobileImgNoBorder, MainCardLeftImgNoBorder
} from "../styled/card-section/cardSectionComponents"
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

const MainCardSection = ({card, title, id, isRight,sand,}) => {
        return (
            <SectionLayoutGrid id={id ? "main-card-section" + id : "main-card-section"} customPadding={"firstElement"}>
                {title &&
                <Col>
                    <Title textAlign="center" marginBottom="medium" marginTop={"medium"} sand={sand}>
                        {title}
                    </Title>
                </Col>
                }
                {isRight ?
                    <Col >
                        <MainCardSectionContainer>
                            <MainCardLeftImgNoBorder src={card.image.localFile.publicURL}/>
                            <MainRightCardContainer>
                                <MainCard
                                    color={isRight ? "beige" : "grey"}
                                    title={card.title}
                                    description={card.description}
                                    sand={sand}
                                    name={card.button && card.button.name}
                                    slug={card.button && card.button.slug}
                                />
                            </MainRightCardContainer>
                        </MainCardSectionContainer>
                    </Col>
                    :
                    <Col>
                        <MainCardSectionContainer>
                            <MainCardMobileImgNoBorder src={card.image.localFile.publicURL}/>

                            <MainLeftCardContainer>
                                <MainCard
                                    color={isRight ? "beige" : "grey"}
                                    title={card.title}
                                    description={card.description}
                                    sand={sand}
                                    name={card.button && card.button.name}
                                    slug={card.button && card.button.slug}
                                />
                            </MainLeftCardContainer>
                            <MainCardRightImg src={card.image.localFile.publicURL}/>
                        </MainCardSectionContainer>
                    </Col>
                }
            </SectionLayoutGrid>
        );
    }
;

export default MainCardSection;