import React, {useState} from 'react';
import {
    TrainerButton,
    TrainerImage,
    TrainerName, TrainerPhoneImage, TrainerWrapper
} from "../../organizms/styled/trainer-section/TrainerSectionComponents";
import {Body} from "../../atoms/styled/typography/typographyComponents";

const TrainerCard = ({avatar, name, role, phone, description}) => {

    const [more, setMore] = useState(false)

    return (
        <TrainerWrapper>
            <TrainerImage src={avatar}/>
            <div>
                <TrainerName>{name}</TrainerName>
                <Body marginBottom={"small"}>{role}</Body>
                <Body marginBottom={"small"} weight={"bold"}>{phone}</Body>
                <TrainerPhoneImage src={avatar}/>

                <Body weight={"bolder"}>
                    {!more ? description.slice(0, 350) + "..." : description}
                </Body>
                {!more ?
                    <TrainerButton onClick={() => setMore(true)}>Többet </TrainerButton>
                    :
                    <TrainerButton onClick={() => setMore(false)}>Kevesebbet</TrainerButton>
                }
            </div>
        </TrainerWrapper>
    );
};

export default TrainerCard;