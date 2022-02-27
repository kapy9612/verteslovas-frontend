import React from 'react';
import {Body} from "../styled/typography/typographyComponents";
import {TableWrapper} from "../styled/table/tableComponents";

const TableRow = ({firstColumn, secondColumn, thirdColumn, variant, isThreeWay, isBold}) => {
    return (
        <TableWrapper color={variant} grid={isThreeWay ? "three" : "two"}>
            <Body color={"black"} weight={isBold && "bold"}>
                {firstColumn}
            </Body>
            <Body color={"black"} weight={isBold && "bold"}>
                {secondColumn}
            </Body>
            {isThreeWay &&
            <Body color={"black"} weight={isBold && "bold"}>
                {thirdColumn}
            </Body>
            }
        </TableWrapper>
    );
};

export default TableRow;