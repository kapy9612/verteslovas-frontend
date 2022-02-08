import React from "react";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import ButtonCard from "../cards/ButtonCard";

import {Col} from "../../atoms/styled/layout/layoutComponents";

import image from "./dummy/button_card_dummy.png"

export default {
    title: 'Molecules/Cards/Button Card',
    args: {
        button:{
            slug:"/test",
            name:"Tovább"
        },
        image: image,
        title: "Születésnap",
        description: "Délelőttönként és délutánonként a lovaglás mellett, egyéb lovas foglalkozásokkal színesítjük a programot. Lócsemegét készítünk, lovaskocsikázásra megyünk. A gyerekek megtanulják a ló körüli teendőket. Megtanulják ápolni, etetni a lovakat, egyszóval, megtanulnak gondoskodni a lovakról. ",
    }
};

export const buttonCard = ({...args}) => (
    <SectionLayoutGrid>
        <Col span={6} grid justifyContent="center">
            <ButtonCard  {...args}/>
        </Col>
        <Col span={6} grid justifyContent="center">
            <ButtonCard  {...args}/>
        </Col>
    </SectionLayoutGrid>
);
