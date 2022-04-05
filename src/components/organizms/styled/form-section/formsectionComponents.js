import styled from "styled-components";

import {FormControl, TextField} from "@mui/material";
import {handleGridColumn} from "../../../atoms/functions/atomsFunctions";

import {ButtonLink} from "../../../atoms/styled/button/buttonComponents"
import {Header3} from "../../../atoms/styled/typography/typographyComponents"

/*MUI Fields*/

export const Input = styled(TextField)`
  font-family: 'Raleway', sans-serif !important;
  font-size: 1rem !important;
  margin-bottom: ${props => props.nomargin ? "" : "var(--small)"};
  grid-column: ${({ span }) => handleGridColumn(span)};

  @media screen and (max-width: 500px) {
    grid-column: 1/-1;
  }
`

export const SelectControl = styled(FormControl)`
  font-family: 'Raleway', sans-serif !important;
  font-size: 1rem !important;
  margin-bottom: ${props => props.nomargin ? "" : "var(--smaller)"};
  grid-column: ${({ span }) => handleGridColumn(span)};

  option {
    background-color: var(--light-gray) !important;
  }

  @media screen and (max-width: 500px) {
    grid-column: 1/-1;
  }
`


/*MUI Fields End*/

export const LongFormFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
`
export const LongSimpleFormFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr ;
  width: 49%;
`
export const SmallFormFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 0.1fr ;
  grid-gap:1rem;
  width: 100%;
`
export const RadioWrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 0.1fr;
  width: 50%;
`
export const RadioLabel = styled.label`
  font-style: normal;
  font-family: 'Raleway', sans-serif;
  padding-right: 1rem;

`
export const LongFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:2rem;
  grid-column: 1/-1;

`
export const LongFormContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: var(--medium);
  width:50%;
`
export const LongForm = styled.form`
  display: grid;
  grid-gap: 1rem 1rem;
  grid-template-columns: repeat(12, 1fr);
  justify-content: stretch;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem 1rem;
  }
`
export const WeddingForm = styled.form`
  display: grid;
  grid-gap: 1rem 1rem;
  grid-template-columns: repeat(12, 1fr);
  justify-content: stretch;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem 1rem;
  }
`
export const CampFormContainer = styled.form`
  display: grid;
  grid-gap: 1rem 1rem;
  grid-template-columns: repeat(12, 1fr);
  justify-content: stretch;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: var(--light-brown-form);
  box-sizing: border-box;
  padding: 2.5rem 2rem 3rem 2rem;
  border-radius: 1.5rem;


  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem 1rem;
  }
`
/*export const CampFormContainer = styled.form`
  display: grid;
  grid-template-rows: auto;
  row-gap: 1.5rem;
  box-sizing: border-box;
  padding: 2.5rem 2rem 3rem 2rem;
  margin-top: var(--large);
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: var(--light-brown-form);
  width: 100%;
  border-radius: 1.5rem;
`
*/

export const FamilyFormContainer = styled.form`
  display: grid;
  grid-template-rows: auto;
  row-gap: 1.5rem;
  box-sizing: border-box;
  padding: 2.5rem 2rem 3rem 2rem;
  width: 100%;
  background-color: var(--light-grey);
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
  grid-gap: 1rem 1rem;
  grid-template-columns: repeat(12, 1fr);
  justify-content: stretch;
`
export const CampImage = styled.img`
  max-width: 100%;
 
  
`
export const FormContainer = styled(CampFormContainer)`
  display: grid;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-content: stretch;
`
export const ButtonContainer = styled(ButtonLink)`
  align-self: end;
`
export const Buttonlink = styled(ButtonLink)`
  border-radius: 0.4rem;
  width: 100%;
`
export const WeddingButtonlink = styled(ButtonLink)`
  border-radius: 0.4rem;
  justify-content: center;
  margin-top: 3rem
`

export const TitleContainer = styled(Header3)`
  align-self: center;
  
  @media (max-width: 1000px){
    font-size: 2rem;
  }
`
export const FormFieldSelect = styled.select`
  padding: 0.5rem;
  position: static;
  width: 101%;
  margin:0;
  border: 0;
  justify-self: center;
  font-family: 'Raleway', sans-serif;
  font-size: var(--p-simple);
  background: var(--whitesmoke-background);
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  align-self: stretch;
 
  &:focus {
    font-weight: bold;
    outline: 0;
  }
`
export const FormFieldTextArea = styled.textarea`
  padding: 0.5rem;
  position: static;
  width: 98%;
  border: 0;
  justify-self: center;
  font-family: 'Raleway', sans-serif;
  font-size: var(--p-simple);
  background: var(--whitesmoke-background);
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  align-self: stretch;

  &:focus {
    font-weight: bold;
    outline: 0;
  }
`