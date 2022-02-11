import React from 'react';

import CampCardSection from "../card-section/CampCardSection";

import image from "./dummy/vidám_dummy.png" ;

export default {
    title: 'Organisms/Card Sections/Camp Card Section',
    args: {
        image: image,
        position: 0,
        border:true,
        card:
            {
                color: "",
                title: "Születésnap",
                description: "Délelőttönként és délutánonként a lovaglás mellett, egyéb lovas foglalkozásokkal színesítjük a programot. Lócsemegét készítünk, lovaskocsikázásra megyünk. A gyerekek megtanulják a ló körüli teendőket. Megtanulják ápolni, etetni a lovakat. Megismerkednek a felszerelésekkel, lószerszámokkal és belekóstolnak azok karbantartási munkálataiba is. A tábor programjába tartozik még a bungee trambulin, falmászás, 3D karika és csobbanás a csúszdás medencékbe.Bentlakásos napi kétszeri lovaglással: 74000 Ft"

            }
    }
};
export const campCardSection = ({...args}) => {
    return (
        <CampCardSection {...args}/>
    );
};

