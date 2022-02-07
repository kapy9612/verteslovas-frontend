import React from "react";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import MainCard from "../cards/MainCard";
import {Col} from "../../atoms/styled/layout/layoutComponents";


export default {
    title: 'Molecules/Cards/Main Card',
    args: {
        color:"beige",
        title: "Születésnap",
        description:"Délelőttönként és délutánonként a lovaglás mellett, egyéb lovas foglalkozásokkal színesítjük a programot. Lócsemegét készítünk, lovaskocsikázásra megyünk. A gyerekek megtanulják a ló körüli teendőket. Megtanulják ápolni, etetni a lovakat. Megismerkednek a felszerelésekkel, lószerszámokkal és belekóstolnak azok karbantartási munkálataiba is. A tábor programjába tartozik még a bungee trambulin, falmászás, 3D karika és csobbanás a csúszdás medencékbe.Bentlakásos napi kétszeri lovaglással: 74000 Ft"

    }, argTypes: {
       color: {
            options: [
                'beige',
                'grey',
            ],
            control: {type: 'select'}
        },

    }
};

export const mainCard = ({...args}) => (
    <SectionLayoutGrid>
        <Col span={6} grid>
            <MainCard  {...args}/>
        </Col>
    </SectionLayoutGrid>
);
