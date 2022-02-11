import styled from "styled-components";
import {handleFormBGColor} from "../../functions/moleculesFunctions"

export const CampFormContainer = styled.div`
  display: grid;
  //max-width: 21rem;
  grid-template-rows: auto;
  row-gap: 1.5rem;
  box-sizing: border-box;
  padding: 2.5rem 2rem 3rem 2rem;
  width: 100%;
  background: ${({color}) => handleFormBGColor(color)};
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;

`
