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
import {Title} from "../../atoms/styled/typography/typographyComponents";

const MainCardSection = ({ card,title}) => {
        return (
            <SectionLayoutGrid background={"whitesmoke"} >
                <Col>
                    <Title textAlign="center" marginBottom="medium">
                        {title}
                    </Title>
                </Col>
                {card && card.map((item, index) => (index % 2 === 1 ?
                    <Col>
                        <MainCardSectionContainer>
                            <MainCardLeftImg src={item.image.localFile.publicURL}/>
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
                            <MainCardRightImg src={item.image.localFile.publicURL}/>
                        </MainCardSectionContainer>
                    </Col>
                ))}
            </SectionLayoutGrid>
        );
    }
;

export default MainCardSection;