import React from "react";

import image from "./dummy/wedding_dummy.png"
import WeddingHeroSection from "../hero-section/WeddingHeroSection";

export default {
    title: 'Organisms/Hero Sections/Wedding Hero',
    args: {
        image: image,
        title: "Rendezd meg álmaid esküvőjét",
        description: "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck of your home or having. Over of computers are infected with adware and spyware. Such software is rarely accompanied by uninstall utility and even when.There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck of your home or having. Over of computers are infected with adware and spyware. Such software is rarely accompanied by uninstall utility and even when.",
    }
};

export const weddingHeroSection = ({...args}) => {
    return (
        <WeddingHeroSection {...args}/>
    );
};
