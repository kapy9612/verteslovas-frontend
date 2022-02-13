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
                <TableRow firstColumn={header.firstColumn} secondColumn={header.secondColumn} variant={isYellow ? "yellow" : "grey"}/>
                {rows && rows.map((item, index) =>
                    <TableRow key={index} firstColumn={item.firstColumn} secondColumn={item.secondColumn} variant={!isYellow ? (index % 2 === 0 ? "beige" : "whitesmoke") : (index % 2 === 0 ? "lightYellow" : "whitesmoke")}/>
                )}
            </TableRowCol>
        </SectionLayoutGrid>
    );
};

export default SimpleTableSection;