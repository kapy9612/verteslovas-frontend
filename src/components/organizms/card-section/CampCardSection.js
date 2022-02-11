import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {
    MainCardLeftImg,
    MainRightCardContainer,
    MainLeftCardContainer,
    MainCardRightImg,
    MainCardSectionContainer
} from "../styled/card-section/cardSectionComponents"
import {Col} from "../../atoms/styled/layout/layoutComponents";
import CampCard from "../../molecules/cards/ChildCard";
import MainCard from "../../molecules/cards/MainCard";

const CampCardSection = ({image, card, position, border}) => {
    return (
        <SectionLayoutGrid>
            {position % 2 === 0 ?
                <Col>
                    <MainCardSectionContainer>
                        <MainCardLeftImg src={image} border />
                        <MainRightCardContainer>
                            <CampCard
                                color={position % 2 === 0 ? "yellow" : "green"}
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
                            <CampCard
                                color={position % 2 === 0 ? "yellow" : "green"}
                                title={card.title}
                                description={card.description}
                            />
                        </MainLeftCardContainer>
                        <MainCardRightImg src={image} border/>
                    </MainCardSectionContainer>
                </Col>
            }
        </SectionLayoutGrid>
    );
};

export default CampCardSection;