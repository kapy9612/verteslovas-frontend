import React, {useState} from 'react';

import {Body, Title,} from "../../atoms/styled/typography/typographyComponents";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {
    TrainerButton,
    TrainerImage,
    TrainerName,
    TrainerWrapper
} from "../styled/trainer-section/TrainerSectionComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";


const TrainerSection = ({trainers}) => {
    const [onclick, setOnclick] = useState(true)
    const toLeave = (name) => {

        setOnclick(false)

    }
    const notToLeave = () => {
        setOnclick(true)

    }
    return (
        <SectionLayoutGrid id="trainer-section">
            <Col span={12}>
                <Title textAlign={"center"} marginBottom={"large"} sand={true}>Oktatóink</Title>
            </Col>
            {trainers && trainers.map((item, index) => (
                <Col key={index} marginBottom={"largest"}>
                    <TrainerWrapper>
                        <TrainerImage src={item.avatar.localFile.publicURL}/>
                        <div>
                            <TrainerName>{item.name}</TrainerName>
                            <Body marginBottom={"small"}>{item.role}</Body>
                            <Body marginBottom={"small"} weight={"bold"}>{item.phone}</Body>
                            <Body
                                weight={"bolder"}>{onclick ? item.description.slice(0, 350) + "..." : item.description}</Body>
                             {
                                onclick  ?  <TrainerButton onClick={() => toLeave()}>Többet </TrainerButton>  :
                                    <TrainerButton onClick={() => notToLeave()}>Kevesebbet</TrainerButton>
                            }
                        </div>
                    </TrainerWrapper>
                </Col>
            ))}
        </SectionLayoutGrid>
    );
};

export default TrainerSection;