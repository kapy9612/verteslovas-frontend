import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import CampCard from "../../molecules/cards/ChildCard";

import {
    MainCardLeftImg,
    MainRightCardContainer,
    MainLeftCardContainer,
    MainCardRightImg,
    MainCardSectionContainer
} from "../styled/card-section/cardSectionComponents"
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

const CampCardSection = ({title, cards, border}) => {
    return (
        <SectionLayoutGrid id="camp-card-section">
            <Col>
                <Title sand="true" textAlign="center" marginBottom="medium">
                    {title}
                </Title>
            </Col>
            {cards && cards.map((item, index) => (index % 2 === 0 ?
                    <Col>
                        <MainCardSectionContainer>
                            <MainCardLeftImg src={item.image.localFile.publicURL} border={border ? "true" : ""}/>
                            <MainRightCardContainer>
                                <CampCard
                                    color={index % 2 === 0 ? "yellow" : "green"}
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
                                <CampCard
                                    color={index % 2 === 0 ? "yellow" : "green"}
                                    title={item.title}
                                    description={item.description}
                                />
                            </MainLeftCardContainer>
                            <MainCardRightImg src={item.image} border={border ? "true" : ""}/>
                        </MainCardSectionContainer>
                    </Col>
            ))}
        </SectionLayoutGrid>
    );
};

export default CampCardSection;