import React from "react";

import {ButtonLink} from "../styled/button/buttonComponents"

export default {
    title: 'Atoms/Buttons',
    args: {
        variant: "yellow",
        children: "Test Button",
    },
    argTypes: {
        variant: {
            options: [
                'yellow',
                'beige',
            ],
            control: {type: 'select'}
        }
    }
};

export const Buttons = ({...args}) => (
    <ButtonLink to={"/test"} {...args}/>
);
