import React from "react";

import SectionLayoutGrid from "../layout/SectionLayoutGrid";

import {FormField} from "../styled/formField/formFieldComponents"
import {Col} from "../styled/layout/layoutComponents";

export default {
    title: 'Atoms/Form Field',
    args: {
            placeholder:"Szülő neve"
        },

};

export const formField = ({...args}) => (
    <SectionLayoutGrid>
        <Col>
            <FormField to={"/test"} {...args}/>
        </Col>
    </SectionLayoutGrid>
);
