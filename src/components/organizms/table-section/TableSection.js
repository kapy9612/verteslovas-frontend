import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import TableRow from "../../atoms/table-row/TableRow";

import {TableRowCol} from "../styled/table-section/TableSectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";
import {Col} from "../../atoms/styled/layout/layoutComponents";

const TableSection = ({isYellow, id, sand, table}) => {
    return (
        <SectionLayoutGrid customMinHeight="small" id={id ? "simple-table-section-" + id : "simple-table-section"}>
            {table && table.map((table, index) =>
                <React.Fragment key={index}>
                    <Col>
                        <Header2 sand={true} textAlign="center" marginBottom="small">{table.title}</Header2>
                    </Col>
                    <TableRowCol>
                        <TableRow isThreeWay={true} firstColumn={table.header.row1} secondColumn={table.header.row2}
                                  thirdColumn={table.header.row3} variant={isYellow ? "yellow" : "grey"} isBold/>
                        {table.table && table.table.map((item, index) =>
                            <TableRow key={index} isThreeWay={true} firstColumn={item.row1} secondColumn={item.row2}
                                      thirdColumn={item.row3}
                                      variant={!isYellow ? (index % 2 === 0 ? "beige" : "whitesmoke") : (index % 2 === 0 ? "lightGrey" : "lightYellow")}/>
                        )}
                    </TableRowCol>
                </React.Fragment>
            )}

        </SectionLayoutGrid>
    );
};

export default TableSection;
