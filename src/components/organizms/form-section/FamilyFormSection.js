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
import csaladform from "../../../../static/assets/családúj.png"

const FamilyFormSection = () => {
    return (
        <SectionLayoutGrid id="form-section">
            <Col span={7} grid alignContent={"end"} >
                <CampImage src={csaladform}/>
            </Col>
            <Col span={5}alignContent={"end"} grid >
                <FamilyFormContainer>
                    <Header2 marginBottom="small" textAlign="center" weight={"bolder"}
                             sand={true}>Ajánlatkérés</Header2>
                    <FormField placeholder={"Teljes név"}/>
                    <FormField placeholder={"Telefonszám"}/>
                    <FormField placeholder={"Email"}/>
                    <FormField placeholder={"Létszám"}/>
                    <FormFieldSelect placeholder={"Esemény típusa"} id="a" name="a">
                        <option value={0}>Esemény típusa</option>
                        <option value="Családinap">Családinap</option>
                        <option value="Baráti összejövetel">Baráti összejövetel</option>
                        <option value="Felnőtt születésnap">Felnőtt születésnap</option>
                        <option value="Gyerek születésnap">Gyerek születésnap</option>
                    </FormFieldSelect>
                    <FormFieldTextArea id="id" name="megjegyzes" rows="4" cols="50" placeholder={"Megjegyzés"}>
                    </FormFieldTextArea>

                    <Buttonlink variant={"beige"}>Küldés</Buttonlink>

                </FamilyFormContainer>
            </Col>

        </SectionLayoutGrid>

    );
};

export default FamilyFormSection;