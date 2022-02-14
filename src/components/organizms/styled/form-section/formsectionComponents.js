import styled from "styled-components";
import {CampFormContainer} from "../../../molecules/styled/form/formComponentes"
import {ButtonLink} from "../../../atoms/styled/button/buttonComponents"
import {Header3} from "../../../atoms/styled/typography/typographyComponents"

export const FormContainer = styled(CampFormContainer)`
  display: grid;
  height: 100%;
  justify-content: center;
  align-content: stretch;
`

export const ButtonContainer = styled(ButtonLink)`
  align-self: end;
`

export const TitleContainer = styled(Header3)`
  align-self: center;
`
