import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import TableRow from "../../atoms/table-row/TableRow";

import {Col} from "../../atoms/styled/layout/layoutComponents";
import {TableRowCol} from "../styled/table-section/TableSectionComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

const SimpleTableSection = ({title ,header, rows, isYellow}) => {
    return (
        <SectionLayoutGrid customMinHeight="small">
            <Col>
                <Title color="black" textAlign="center" marginBottom="small" sand={isYellow && "true"}>
                    {title}
                </Title>
            </Col>
            <TableRowCol>
                <TableRow firstColumn={header.row1} secondColumn={header.row2} variant={isYellow ? "yellow" : "grey"} isBold/>
                {rows && rows.map((item, index) =>
                    <TableRow key={index} firstColumn={item.row1} secondColumn={item.row2} variant={!isYellow ? (index % 2 === 0 ? "beige" : "whitesmoke") : (index % 2 === 0 ? "lightGrey" : "lightYellow"  )}/>
                )}
            </TableRowCol>
        </SectionLayoutGrid>
    );
};

export default SimpleTableSection;