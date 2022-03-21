import styled from "styled-components";
import {handleFormBGColor} from "../../functions/moleculesFunctions"
import {FormField} from "../../../atoms/styled/formField/formFieldComponents";
import {FormFieldTextArea} from "../../../organizms/styled/form-section/formsectionComponents";

export const CampFormContainer = styled.form`
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
export const WeddingFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.9fr;
  grid-gap: 6rem;

`
export const WeddingFormField = styled(FormField)`
  background-color: white;

`
export const WeddingFormFieldTextArea = styled(FormFieldTextArea)`
  background-color: white;

`
export const WeddingFormContainer = styled.form`
  display: grid;
  //max-width: 21rem;
  grid-template-rows: auto;
  row-gap: 1.5rem;
  box-sizing: border-box;
  padding: 2.5rem 2rem 3rem 2rem;
  width: 100%;
  //background: var(--light-grey);
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
  justify-self: center;
`
