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
import MainCard from "../../molecules/cards/MainCard";

const MainCardSection = ({image, card, position}) => {
    return (
        <SectionLayoutGrid>
            {position % 2 === 0 ?
                <Col>
                    <MainCardSectionContainer>
                        <MainCardLeftImg src={image}/>
                        <MainRightCardContainer>
                            <MainCard
                                color={position % 2 === 1 ? "beige" : "grey"}
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
                                color={position % 2 === 1 ? "beige" : "grey"}
                                title={card.title}
                                description={card.description}
                            />
                        </MainLeftCardContainer>
                        <MainCardRightImg src={image}/>
                    </MainCardSectionContainer>
                </Col>
            }
        </SectionLayoutGrid>
    );
}
;

export default MainCardSection;