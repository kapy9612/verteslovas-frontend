import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col, DesktopCol, FormCol, FormImageCol} from "../../atoms/styled/layout/layoutComponents";

import {
    Buttonlink,
    CampFormContainer,
    CampImage,
     Input,
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";
import taborform from "../../../../static/assets/tabor_form.png"

const BirthdayFormSection = () => {
    return (
        <SectionLayoutGrid id="form-section">
            <FormImageCol span={7} grid alignContent={"end"}>
                <CampImage src={taborform}/>
            </FormImageCol>
            <FormCol span={5}>
                <CampFormContainer>
                    <Col>
                        <Header2 marginBottom="small" textAlign="center" weight={"bolder"}
                                 sand={"true"}>Ajánlatkérés</Header2>
                    </Col>

                    <Input
                        size={"small"}
                        fullWidth
                        label={"Szülő neve:"}
                        required
                        name={"name"}

                    />
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Telefonszám:"}
                        required
                        name={"name"}

                    />
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Email:"}
                        required
                        type={"email"}
                        name={"name"}

                    />

                    <Input
                        size={"small"}
                        fullWidth
                        label={"Gyerekek száma:"}
                        required
                        name={"name"}

                    />
                    <Input
                        size={"small"}
                        fullWidth
                        multiline
                        rows={4}
                        label={"Kért programok:"}
                        required
                        name={"name"}

                    />

                    <Col grid justifyContent={"stretch"}>
                        <Buttonlink variant={"yellow"}>Küldés</Buttonlink>
                    </Col>


                </CampFormContainer>
            </FormCol>

        </SectionLayoutGrid>

    );
};

export default BirthdayFormSection;
