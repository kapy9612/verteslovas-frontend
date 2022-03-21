import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col} from "../../atoms/styled/layout/layoutComponents";

import {
    Buttonlink,
    CampFormContainer,
    CampImage,
    FormFieldSelect,
    FormFieldTextArea
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";
import {FormField} from "../../atoms/styled/formField/formFieldComponents";

const BirthdayFormSection    = ({card}) => {
    return (
        <SectionLayoutGrid >
            <Col span={7} grid alignContent={"end"} >
                <CampImage src={card.image.localFile.publicURL}/>
            </Col>
            <Col span={5}>
                <CampFormContainer>
                    <Header2 marginBottom="small" textAlign="center" weight={"bolder"} sand={"true"}>Ajánlatkérés</Header2>
                    <FormField placeholder={"Szülő neve"}/>
                    <FormField placeholder={"Telefonszám"}/>
                    <FormField placeholder={"Email"}/>
                    <FormField placeholder={"Gyerekek száma"}/>
                    <FormField placeholder={"Átlagéletkor"}/>
                    <FormFieldTextArea id="id" name="megjegyzes" rows="4" cols="50" placeholder={"Kért programok"}>
                    </FormFieldTextArea>

                    <Buttonlink variant={"yellow" }>Küldés</Buttonlink>

                </CampFormContainer>
            </Col>

        </SectionLayoutGrid>

    );
};

export default BirthdayFormSection;