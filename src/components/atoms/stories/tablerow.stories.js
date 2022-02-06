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
        isThreeWay: false
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
    }
};

export const tableRow = ({...args}) => (
    <SectionLayoutGrid>
        <Col>
            <TableRow  {...args}/>
        </Col>
    </SectionLayoutGrid>

);
