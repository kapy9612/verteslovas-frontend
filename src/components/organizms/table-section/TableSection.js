import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import TableRow from "../../atoms/table-row/TableRow";

import {TableRowCol} from "../styled/table-section/TableSectionComponents";
import { Title} from "../../atoms/styled/typography/typographyComponents";

const TableSection = ({isYellow, id, sand, table}) => {
    return (
        <SectionLayoutGrid customMinHeight="small" id={id ? "simple-table-section-" + id : "simple-table-section"}>
            {table && table.map((table, index) =>
                <>
                <Title sand={true} textAlign="center" marginBottom="medium">{table.title}</Title>
                <TableRowCol>
                    <TableRow isThreeWay={true} firstColumn={table.header.row1} secondColumn={table.header.row2}
                              thirdColumn={table.header.row3} variant={isYellow ? "yellow" : "grey"} isBold/>
                    {table.table && table.table.map((item, index) =>
                        <TableRow key={index} isThreeWay={true} firstColumn={item.row1} secondColumn={item.row2}
                                  thirdColumn={item.row3}
                                  variant={!isYellow ? (index % 2 === 0 ? "beige" : "whitesmoke") : (index % 2 === 0 ? "lightGrey" : "lightYellow")}/>
                    )}
                </TableRowCol>
                </>
            )}

        </SectionLayoutGrid>
    );
};

export default TableSection;
