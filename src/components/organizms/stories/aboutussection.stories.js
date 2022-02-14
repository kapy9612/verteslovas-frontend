import React from "react";


import image from "../../molecules/stories/dummy/icon.png"
import AboutUsSection from "../about-us-section/AboutUsSection";


export default {
    title: 'Organisms/About Us Section',
    args: {
        title:"Rólunk mondták",
        image: image,
        cards: [
            {
                description:"Buying the right telescope to take your love ofBuying the right telescope to take youBuying the right telescope to take youBuying the right telescope to take you astronomy to the next level is a big next step in the development of your passion for the stars.",
                name: "Kitti & Levente"
            },
            {
                description:"Buying the right telescope to ta to take youBuying the right telescope to take youBuying the right telescope to take you astronomy to the next level is a big next step in the development of your passion for the stars.",
                name: "Kitti & Botond"
            },
            {
                description:"Buying the right telescope to take your love ofBuying the right telesct telescope to take your love ofBuying the right telescope to take youBuying the right telescope to take youBuying the right telescope to take you astronomy to the next level is a big next step in the development of your passion for the stars.",
                name: "Vanessza & Levente"
            },
        ]

    }
};

export const aboutUs = ({...args}) => {
    return(
        <AboutUsSection {...args} />
    );
}



