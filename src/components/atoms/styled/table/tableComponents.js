import styled from "styled-components";

import {handleTableColumnColor, handleTableColumnNumber} from "../../functions/atomsFunctions";

export const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({grid}) => handleTableColumnNumber(grid)};
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 0.5rem 1rem 0.5rem;
  
  background-color:${({color}) => handleTableColumnColor(color)};
`
