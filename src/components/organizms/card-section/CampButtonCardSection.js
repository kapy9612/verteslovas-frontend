import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import ButtonCard from "../../molecules/cards/ButtonCard";

import {Col} from "../../atoms/styled/layout/layoutComponents";

const CampButtonCardSection = ({  cards,color,sand}) => {
    return (
        <SectionLayoutGrid id="camp-button-section">
            {cards && cards.map((item, index) => (
                <Col span={6} key={index} justifyContent={"center"} grid>
                    <ButtonCard
                        description={item.description}
                        title={item.title}
                        image={item.cover.localFile.publicURL}
                        button={item.button}
                        sand={sand}
                        color={color}
                    />
                </Col>
            ))}
        </SectionLayoutGrid>
    );
};

export default CampButtonCardSection;