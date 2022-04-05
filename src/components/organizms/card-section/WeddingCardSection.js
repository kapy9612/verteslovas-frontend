import React from 'react';

import WeddingCard from "../../molecules/cards/WeddingCard";
import SectionLayoutGridWedding from "../../atoms/layout/SectionLayoutGridWedding";

import {Title} from "../../atoms/styled/typography/typographyComponents";
import {ActiveCol, Col} from "../../atoms/styled/layout/layoutComponents";

const WeddingCardSection = ({title, cards}) => {
    return (
        <SectionLayoutGridWedding id="wedding-card-section">
            <Col marginBottom="medium">
                <Title textAlign="center" >{title}</Title>
            </Col>
            {cards && cards.map((item, index) => (
                <ActiveCol span={3} key={index} grid>
                    <WeddingCard
                        color={index % 2 === 1 ? "beige" : "grey"}
                        description={item.description}
                        title={item.title}
                        logo={item.logo.localFile.publicURL}

                    />
                </ActiveCol>
            ))}
        </SectionLayoutGridWedding>
    );
};

export default WeddingCardSection;