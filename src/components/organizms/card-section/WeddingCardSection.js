import React from 'react';
import {Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import WeddingCard from "../../molecules/cards/WeddingCard";
import SectionLayoutGridWedding from "../../atoms/layout/SectionLayoutGridWedding";

const WeddingCardSection = ({title , cards}) => {
    return (
        <SectionLayoutGridWedding background={"whitesmoke"}>
            <Col marginBottom="medium">
                <Title textAlign="center">{title}</Title>
            </Col>
            {cards && cards.map((item, index) => (
                <Col span={3} key={index} grid>
                    <WeddingCard
                        color={index % 2 === 1 ? "beige" : "grey"}
                        description={item.description}
                        title={item.title}
                        logo={item.logo.localFile.publicURL}

                    />
                </Col>
            ))}
        </SectionLayoutGridWedding>
    );
};

export default WeddingCardSection;