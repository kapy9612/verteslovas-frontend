import React from 'react';

import ButtonCardSection from "../card-section/ButtonCardSection";

import image from "../../molecules/stories/dummy/active_card_dummy.png";

export default {
    title: 'Organisms/Card Sections/Button Card Section',
    args: {
        title:"Születésnapok",
        cards:
            [
                {
                    button:{
                        slug:"/test",
                        name:"Tovább",
                        color:"beige"
                    },
                    color:"grey",
                    image: image,
                    title: "Szolgáltatások",
                    description: "Délelőttönként és délutánonként a lovaglás mellett, egyéb lovas foglalkozásokkal színesítjük a programot. Lócsemegét készítünk, lovaskocsikázásra megyünk. A gyerekek megtanulják a ló körüli teendőket. Megtanulják ápolni, etetni a lovakat, egyszóval, megtanulnak gondoskodni a lovakról. ",
                },
                {
                    button:{
                        slug:"/test",
                        name:"Tovább",
                        color:"beige"

                    },
                    color:"grey",
                    image: image,
                    title: "Szállás",
                    description: "Délelőttönként és délutánonként a lovaglás mellett, egyéb lovas foglalkozásokkal színesítjük a programot. Lócsemegét készítünk, lovaskocsikázásra megyünk. A gyerekek megtanulják a ló körüli teendőket. Megtanulják ápolni, etetni a lovakat, egyszóval, megtanulnak gondoskodni a lovakról. ",
                },

            ]
    }
};
export const buttonCardSection = ({...args}) => {
    return (
        <ButtonCardSection {...args}/>
    );
};

