import React from 'react';
import {Body, Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {TrainerImage, TrainerName} from "../styled/trainer-section/TrainerSectionComponents";


const TrainerSection = ({trainers}) => {
    return (
        <SectionLayoutGrid>

            {trainers && trainers.map((item, index) => (
                <>
                    <Col span={3} key={index}>
                        <TrainerImage src={item.image}/>
                    </Col >
                    <Col span={9} key={index}>
                         <TrainerName>{item.name}</TrainerName>
                        <Body marginBottom={"small"}>{item.title}</Body>
                        <Body marginBottom={"small"} weight={"bold"}>{item.phone}</Body>
                        <Body>{item.description.slice(0, 350) + "..."}</Body>
                    </Col>
                </>

                ))}


        </SectionLayoutGrid>
    );
};

export default TrainerSection;