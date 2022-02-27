import React from 'react';
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import ButtonCard from "../../molecules/cards/ButtonCard";

const CampButtonCardSection = ({  cards,color,sand}) => {
    return (
        <SectionLayoutGrid>

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