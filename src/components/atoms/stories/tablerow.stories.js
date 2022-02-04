import React from "react";

import TableRow from "../table-row/TableRow";
import SectionLayoutGrid from "../layout/SectionLayoutGrid";
import {Col} from "../styled/layout/layoutComponents";

export default {
    title: 'Atoms/Table Row',
    args: {
        variant: "beige",
        firstColumn: "Szállás",
        secondColumn: "Gyerek",
        thirdColumn: "Felnőtt",
        grid: "three"
    },
    argTypes: {
        variant: {
            options: [
                'grey',
                'beige',
                'lightYellow',
                'yellow',
                'whitesmoke'
            ],
            control: {type: 'select'}
        },
        grid: {
            options: [
                'two',
                'three',
            ],
            control: {type: 'select'}
        }
    }
};

export const tableRow = ({...args}) => (
    <SectionLayoutGrid>
        <Col>
            <TableRow  {...args}/>
        </Col>
    </SectionLayoutGrid>

);
