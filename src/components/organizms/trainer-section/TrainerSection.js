import React from 'react';
import {Body, Title,} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {SectionLayoutGridTrainer, TrainerImage, TrainerName} from "../styled/trainer-section/TrainerSectionComponents";
import SectionLayoutGridWedding from "../../atoms/layout/SectionLayoutGridWedding";


const TrainerSection = ({trainers}) => {
    return (
        <SectionLayoutGridWedding background={"whitesmoke"}>
            {trainers && trainers.map((item, index) => (
                <>
                    <Col span={12}>
                        <Title textAlign={"center"} marginBottom={"medium"}>Oktatóink</Title>
                    </Col>
                    <Col span={3} key={index}>
                        <TrainerImage src={item.avatar.localFile.publicURL}/>
                    </Col >
                    <Col span={9} key={index}>
                         <TrainerName>{item.name}</TrainerName>
                        <Body marginBottom={"small"}>{item.role}</Body>
                        <Body marginBottom={"small"} weight={"bold"}>{item.phone}</Body>
                        <Body weight={"bolder"}>{item.description.slice(0, 350) + "..."}</Body>
                    </Col>
                </>

                ))}


        </SectionLayoutGridWedding>
    );
};

export default TrainerSection;