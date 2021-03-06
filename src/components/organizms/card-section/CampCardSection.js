import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import CampCard from "../../molecules/cards/ChildCard";

import {
    MainCardLeftImg,
    MainRightCardContainer,
    MainLeftCardContainer,
    MainCardRightImg,
    MainCardSectionContainer, MainCardMobileImg
} from "../styled/card-section/cardSectionComponents"
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

const CampCardSection = ({title, card, border, isRight, id,first}) => {
    return (
        <SectionLayoutGrid customPadding={first && "firstElement"} id={id ? "camp-card-section" + id : "camp-card-section"} customMinHeight={"small"} repeatable={first ? "mobileFirst" : "mobile"}>
            <Col>
                <Title sand="true" textAlign="center" marginBottom="medium">
                    {title}
                </Title>
            </Col>
            {isRight ?
                <Col>
                    <MainCardSectionContainer>
                        <MainCardLeftImg src={card.image.localFile.publicURL} border={border ? "true" : ""}/>
                        <MainRightCardContainer>
                            <CampCard
                                color={isRight ? "yellow" : "green"}
                                title={card.title}
                                description={card.description}
                            />
                        </MainRightCardContainer>
                    </MainCardSectionContainer>
                </Col>
                :
                <Col>
                    <MainCardSectionContainer>
                        <MainCardMobileImg src={card.image.localFile.publicURL}/>
                        <MainLeftCardContainer>
                            <CampCard
                                color={isRight ? "yellow" : "green"}
                                title={card.title}
                                description={card.description}
                            />
                        </MainLeftCardContainer>
                        <MainCardRightImg src={card.image.localFile.publicURL} border={border ? "true" : ""}/>
                    </MainCardSectionContainer>
                </Col>
            }
        </SectionLayoutGrid>
    );
};

export default CampCardSection;