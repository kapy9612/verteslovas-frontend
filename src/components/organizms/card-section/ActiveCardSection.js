import React from 'react';
import {Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import ActiveCard from "../../molecules/cards/ActiveCard";

const ActiveCardSection = ({title , cards}) => {
    return (
        <SectionLayoutGrid background={"whitesmoke"}>
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