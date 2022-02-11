import React from 'react';
import {Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import ButtonCard from "../../molecules/cards/ButtonCard";

const CampButtonCardSection = ({  cards}) => {
    return (
        <SectionLayoutGrid>

            {cards && cards.map((item, index) => (
                <Col span={6} key={index} justifyContent={"center"} grid>
                    <ButtonCard
                        description={item.description}
                        title={item.title}
                        image={item.image}
                        button={item.button}
                        sand={item.sand}
                        color={item.color}

                    />
                </Col>
            ))}
        </SectionLayoutGrid>
    );
};

export default CampButtonCardSection;