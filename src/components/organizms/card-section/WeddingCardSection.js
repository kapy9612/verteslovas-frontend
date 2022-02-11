import React from 'react';
import {Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import WeddingCard from "../../molecules/cards/WeddingCard";

const WeddingCardSection = ({title , cards}) => {
    return (
        <SectionLayoutGrid>
            <Col marginBottom="medium">
                <Title textAlign="center">{title}</Title>
            </Col>
            {cards && cards.map((item, index) => (
                <Col span={3} key={index}>
                    <WeddingCard
                        description={item.description}
                        title={item.title}
                        logo={item.logo}
                    />
                </Col>
            ))}
        </SectionLayoutGrid>
    );
};

export default WeddingCardSection;