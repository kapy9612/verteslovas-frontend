import styled from "styled-components";
import {Body} from "../../../atoms/styled/typography/typographyComponents";

export const TrainerImage = styled.img`
  border-radius: 50%;
  width: 100%;
  box-shadow: var(--table-shadow);
  @media(max-width: 800px){
    display: none;

  }
`
export const TrainerPhoneImage = styled.img`
  display: none;
  @media(max-width: 800px){
    display: grid;
    border-radius: 0;
    width: 100%;
    margin-bottom: 1rem;
    box-shadow: var(--table-shadow);

  }
`
export const TrainerName = styled(Body)`
  font-size: calc(var(--p-simple) * 2);
  font-weight: var(--bolder);
  //color: #8c5e5a;
`
export const TrainerWrapper = styled.div`
  display: grid;
  grid-gap:2rem;
  grid-template-columns: 3fr 9fr;
  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
`
export const TrainerButton = styled.button`
  border:none ;
  font-size:var(--form-p);
  background-color: whitesmoke;
  margin: 0;
  color: #8c5e5a;
  padding: 2rem 2rem 0 0;
  text-align: right;
  
  &:hover{
    color:black;
  }
`