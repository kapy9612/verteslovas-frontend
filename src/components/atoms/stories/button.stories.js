import React from "react";

import SectionLayoutGrid from "../layout/SectionLayoutGrid";

import {ButtonLink} from "../styled/button/buttonComponents"
import {Col} from "../styled/layout/layoutComponents";

export default {
    title: 'Atoms/Buttons',
    args: {
        variant: "yellow",
        children: "Test Button",
        width:"small"
    },
    argTypes: {
        variant: {
            options: [
                'yellow',
                'beige',
                'whitesmoke',

            ],
            control: {type: 'select'}
        },
        width: {
            options: [
                'small',
                'full',

            ],
            control: {type: 'select'}
        }
    }
};

export const Buttons = ({...args}) => (
    <SectionLayoutGrid>
        <Col>
            <ButtonLink to={"/test"} {...args}/>
        </Col>
    </SectionLayoutGrid>
);
