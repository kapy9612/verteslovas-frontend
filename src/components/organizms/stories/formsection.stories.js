import React from 'react';

import FormSection from "../form-section/FormSection";

import image from "../../organizms/stories/dummy/cég_új 1.png";

export default {
    title: 'Organisms/Form Sections/Form Section',
    args: {
        leftImage:false,
        title: "Ajánlatkérés",
        button: "Jelentkezés",
        placeholder: "Szülő neve:",
        color: "grey",
        image:image,
        sand: false,
        titlePosition:false,
        buttonColor:false,
    }
};
export const formSection = ({...args}) => {
    return (
        <FormSection {...args}/>
    );
};

