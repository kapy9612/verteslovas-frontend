import React from "react";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import CampForm from "../forms/CampForm";
import {Col} from "../../atoms/styled/layout/layoutComponents";


export default {
    title: 'Molecules/Form/Camp Form',
    args: {
        title: "Jelentkezz a táborba!",
        button: "Jelentkezés",
        placeholder: "Szülő neve:",
        color: "brown",
        sand:true,
        titlePosition:true,
        buttonColor:true

    },
    argTypes: {
        color: {
            options: [
                'grey',
                'brown',

            ],
            control: {type: 'select'}
        },
    }
};

export const campForm = ({...args}) => (
    <SectionLayoutGrid>
        <Col span={6} grid>
            <CampForm  {...args}/>
        </Col>

    </SectionLayoutGrid>
);