import React from 'react';

import WeddingCardSection from "../card-section/WeddingCardSection";

import logo from "../../molecules/stories/dummy/wedding_card_dummy_logo.svg";

export default {
    title: 'Organisms/Card Sections/Wedding Card Section',
    args: {
        title: "Szolgáltatások",
        cards:
            [
                {
                    logo: logo,
                    title: "Szállás",
                    description: "A helyszínen 80 főnek tudunk szállást biztosítani. A helyszínen 80 főnek tudunk szállást biztosítani.",
                },
                {
                    logo: logo,
                    title: "Szállás",
                    description: "A helyszínen 80 főnek tudunk szállást biztosítani. A helyszínen 80 főnek tudunk szállást biztosítani.",
                },
                {
                    logo: logo,
                    title: "Szállás",
                    description: "A helyszínen 80 főnek tudunk szállást biztosítani. A helyszínen 80 főnek tudunk szállást biztosítani.",
                },
                {
                    logo: logo,
                    title: "Szállás",
                    description: "A helyszínen 80 főnek tudunk szállást biztosítani. A helyszínen 80 főnek tudunk szállást biztosítani.",
                },
                {
                    logo: logo,
                    title: "Szállás",
                    description: "A helyszínen 80 főnek tudunk szállást biztosítani. A helyszínen 80 főnek tudunk szállást biztosítani.",
                },
                {
                    logo: logo,
                    title: "Szállás",
                    description: "A helyszínen 80 főnek tudunk szállást biztosítani. A helyszínen 80 főnek tudunk szállást biztosítani.",
                },
            ]
    }
};
export const weddingCardSection = ({...args}) => {
    return (
        <WeddingCardSection {...args}/>
    );
};

