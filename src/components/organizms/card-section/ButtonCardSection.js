import React from 'react';
import {Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import ButtonCard from "../../molecules/cards/ButtonCard";

const ButtonCardSection = ({title , cards}) => {
    return (
        <SectionLayoutGrid>
            <Col marginBottom="medium">
                <Title textAlign="center">{title}</Title>
            </Col>
            {cards && cards.map((item, index) => (
                <Col span={6} key={index} justifyContent={"center"} grid>
                    <ButtonCard
                        description={item.description}
                        title={item.title}
                        image={item.image}
                        button={item.button}
                        color={item.color}
                    />
                </Col>
            ))}
        </SectionLayoutGrid>
    );
};

export default ButtonCardSection;