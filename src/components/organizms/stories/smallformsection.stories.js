import React from 'react';
import image from "../../organizms/stories/dummy/Form_ikon.png";
import FormSection from "../form-section/FormSection";
import SmallFormSection from "../form-section/SmallFormSection";

export default {
    title: 'Organisms/Form Sections/Small Form Section',
    args: {
        description:"Állítsd össze milyen programokat szeretnél és küldd el nekünk!",
        image:image,
        sand:true,
        button:
            {
                slug:"/slug",
                color:"yellow",
                title:"Tovább",
            }
    }
};
export const smallFormSection = ({...args}) => {
    return (
        <SmallFormSection {...args}/>
    );
};