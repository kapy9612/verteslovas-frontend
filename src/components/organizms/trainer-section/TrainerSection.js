import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import TrainerCard from "../../molecules/cards/TrainerCard";

import {Title} from "../../atoms/styled/typography/typographyComponents";
import {Col} from "../../atoms/styled/layout/layoutComponents";

const TrainerSection = ({trainers}) => {

    return (
        <SectionLayoutGrid id="trainer-section">
            <Col span={12}>
                <Title textAlign={"center"} marginBottom={"large"} sand={true}>Oktatóink</Title>
            </Col>
            {trainers && trainers.map((item, index) => (
                <Col key={index} marginBottom={"largest"}>
                    <TrainerCard
                        phone={item.phone}
                        name={item.name}
                        role={item.role}
                        avatar={item.avatar.localFile.publicURL}
                        description={item.description}
                    />
                </Col>
            ))}
        </SectionLayoutGrid>
    );
};

export default TrainerSection;