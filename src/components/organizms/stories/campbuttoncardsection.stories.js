import React from 'react';

import CampButtonCardSection from "../card-section/CampButtonCardSection";

import image from "../../molecules/stories/dummy/active_card_dummy.png";

export default {
    title: 'Organisms/Card Sections/Camp Button Card Section',
    args: {
        cards:
            [
                {
                    button:{
                        slug:"/test",
                        name:"Tovább",
                        color:"lightYellow"
                    },
                    sand:true,
                    color:"white",
                    image: image,
                    title: "Szolgáltatások",
                    description: "Délelőttönként és délutánonként a lovaglás mellett, egyéb lovas foglalkozásokkal színesítjük a programot. Lócsemegét készítünk, lovaskocsikázásra megyünk. A gyerekek megtanulják a ló körüli teendőket. Megtanulják ápolni, etetni a lovakat, egyszóval, megtanulnak gondoskodni a lovakról. ",
                },
                {
                    button:{
                        slug:"/test",
                        name:"Tovább",
                        color:"lightYellow"

                    },
                    color:"white",
                    sand:true,
                    image: image,
                    title: "Szállás",
                    description: "Délelőttönként és délutánonként a lovaglás mellett, egyéb lovas foglalkozásokkal színesítjük a programot. Lócsemegét készítünk, lovaskocsikázásra megyünk. A gyerekek megtanulják a ló körüli teendőket. Megtanulják ápolni, etetni a lovakat, egyszóval, megtanulnak gondoskodni a lovakról. ",
                },

            ]
    }
};
export const campButtonCardSection = ({...args}) => {
    return (
        <CampButtonCardSection {...args}/>
    );
};

