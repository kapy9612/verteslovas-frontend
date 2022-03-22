import styled from "styled-components";
import {ButtonLink} from "../../../atoms/styled/button/buttonComponents"
import {Header3} from "../../../atoms/styled/typography/typographyComponents"

export const CampFormContainer = styled.form`
  display: grid;
  grid-template-rows: auto;
  row-gap: 1.5rem;
  box-sizing: border-box;
  padding: 2.5rem 2rem 3rem 2rem;
  margin-top: var(--large);
  width: 100%;
  background-color: var(--light-brown-form);
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
`
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