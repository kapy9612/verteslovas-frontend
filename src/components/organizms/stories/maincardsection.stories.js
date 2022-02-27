import React from 'react';

import MainCardSection from "../card-section/MainCardSection";

import image from "./dummy/lovas_dummy.png" ;

export default {
    title: 'Organisms/Card Sections/Main Card Section',
    args: {
       card:
            {
                color: "",
                title: "Születésnap",
                description: "Délelőttönként és délutánonként a lovaglás mellett, egyéb lovas foglalkozásokkal színesítjük a programot. Lócsemegét készítünk, lovaskocsikázásra megyünk. A gyerekek megtanulják a ló körüli teendőket. Megtanulják ápolni, etetni a lovakat. Megismerkednek a felszerelésekkel, lószerszámokkal és belekóstolnak azok karbantartási munkálataiba is. A tábor programjába tartozik még a bungee trambulin, falmászás, 3D karika és csobbanás a csúszdás medencékbe.Bentlakásos napi kétszeri lovaglással: 74000 Ft",
                image: image,

            }
    }
};
export const mainCardSection = ({...args}) => {
    return (
        <MainCardSection {...args}/>
    );
};

