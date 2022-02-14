import styled from "styled-components";
import {Body} from "../../../atoms/styled/typography/typographyComponents";

export const TrainerImage = styled.img`  
  border-radius: 50%;
  width:100%;
  box-shadow:var(--table-shadow) ;
`

export const TrainerName = styled(Body)`  
  font-size: calc(var(--p-simple)*2);
  margin-bottom: var(--small);
`
