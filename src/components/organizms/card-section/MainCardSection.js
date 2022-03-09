import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import MainCard from "../../molecules/cards/MainCard";

import {
    MainCardLeftImg,
    MainRightCardContainer,
    MainLeftCardContainer,
    MainCardRightImg,
    MainCardSectionContainer
} from "../styled/card-section/cardSectionComponents"
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

const MainCardSection = ({card, title, id, isRight}) => {
        return (
            <SectionLayoutGrid id={id ? "main-card-section" + id : "main-card-section"} customPadding={"firstElement"}>
                {title &&
                <Col>
                    <Title textAlign="center" marginBottom="medium">
                        {title}
                    </Title>
                </Col>
                }
                {isRight ?
                    <Col>
                        <MainCardSectionContainer>
                            <MainCardLeftImg src={card.image.localFile.publicURL}/>
                            <MainRightCardContainer>
                                <MainCard
                                    color={isRight ? "beige" : "grey"}
                                    title={card.title}
                                    description={card.description}
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