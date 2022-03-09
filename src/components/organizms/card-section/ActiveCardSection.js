import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import ActiveCard from "../../molecules/cards/ActiveCard";

import {Title} from "../../atoms/styled/typography/typographyComponents";
import {Col} from "../../atoms/styled/layout/layoutComponents";

const ActiveCardSection = ({title, cards, id}) => {
    return (
        <SectionLayoutGrid id={id ? "active-card-section-" + id : "active-card-section"}>
            <Col marginBottom="medium">
                <Title textAlign="center">{title}</Title>
            </Col>
            {cards && cards.map((item, index) => (
                <Col span={4} key={index} grid justifyContent={"stretch"}>
                    <ActiveCard
                        description={item.description}
                        title={item.title}
                        image={item.cover.localFile.publicURL}
                    />
                </Col>
            ))}
        </SectionLayoutGrid>
    );
};

export default ActiveCardSection;