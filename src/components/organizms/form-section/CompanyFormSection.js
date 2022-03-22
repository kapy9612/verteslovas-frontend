import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col} from "../../atoms/styled/layout/layoutComponents";

import {
    Buttonlink,
    CampImage, FamilyFormContainer, FormFieldSelect,
    FormFieldTextArea
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";
import {FormField} from "../../atoms/styled/formField/formFieldComponents";
import cegform from "../../../../static/assets/ceg_form.png"


const CompanyFormSection = () => {
    return (
        <SectionLayoutGrid id="form-section">
            <Col span={7} grid alignContent={"end"} justifyContent={"start"}>
                <CampImage src={cegform}/>
            </Col>
            <Col span={5}>
                <FamilyFormContainer>
                    <Header2 marginBottom="small" textAlign="center" weight={"bolder"} sand={true}>Ajánlatkérés</Header2>
                    <FormField placeholder={"Teljes név"}/>
                    <FormField placeholder={"Cégnév"}/>
                    <FormField placeholder={"Telefonszám"}/>
                    <FormField placeholder={"Email"}/>
                    <FormFieldSelect placeholder={"Esemény típusa"} id="a" name="a">
                        <option value={0}>Esemény típusa</option>
                        <option value="Céges nap">Céges nap</option>
                        <option value="Csapatépítő">Csapatépítő</option>
                        <option value="Céges családinap">Céges családinap</option>
                        <option value="Céges gyerektábor">Céges gyerektábor</option>
                    </FormFieldSelect>
                    <FormFieldTextArea id="id" name="megjegyzes" rows="4" cols="50" placeholder={"Megjegyzés"}>
                    </FormFieldTextArea>

                    <Buttonlink variant={"beige"}>Küldés</Buttonlink>

                </FamilyFormContainer>
            </Col>

        </SectionLayoutGrid>

    );
};

export default CompanyFormSection;