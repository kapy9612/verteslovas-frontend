import React from 'react';

import ActiveCardSection from "../card-section/ActiveCardSection";

import image from "../../molecules/stories/dummy/active_card_dummy.png";

export default {
    title: 'Organisms/Card Sections/Active Card Section',
    args: {
        title: "Aktív játékok",
        cards:
            [
                {
                    image: image,
                    title: "Bungee trambulin",
                    description: "Maximum 80 kg",
                    price: "1.200,- Ft/fő"
                },
                {
                    image: image,
                    title: "Bungee trambulin",
                    description: "Maximum 80 kg",
                    price: "3.200,- Ft/fő"
                },
                {
                    image: image,
                    title: "Bungee trambulin",
                    description: "Maximum 80 kg",
                    price: "4.200,- Ft/fő"
                },
                {
                    image: image,
                    title: "Bungee trambulin",
                    description: "Maximum 80 kg",
                    price: "5.200,- Ft/fő"
                },


            ]
    }
};
export const activeCardSection = ({...args}) => {
    return (
        <ActiveCardSection {...args}/>
    );
};

