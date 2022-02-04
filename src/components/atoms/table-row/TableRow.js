import React from 'react';
import {Body} from "../styled/typography/typographyComponents";
import {TableWrapper} from "../styled/table/tableComponents";

const TableRow = ({firstColumn, secondColumn, thirdColumn}) => {
    return (
        <TableWrapper color={"beige"} grid={"three"} >
            <Body color={"black"} weight={"bold"}>
                {firstColumn}
            </Body>
            <Body color={"black"} weight={"bold"}>
                {secondColumn}
            </Body>
            <Body color={"black"} weight={"bold"}>
                {thirdColumn}
            </Body>

        </TableWrapper>
    );
};

export default TableRow;