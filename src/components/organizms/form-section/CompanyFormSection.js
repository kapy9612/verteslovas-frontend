import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col, FormCol, FormImageCol} from "../../atoms/styled/layout/layoutComponents";

import {
    Buttonlink,
    CampImage, FamilyFormContainer,
     Input, SelectControl
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";
import cegform from "../../../../static/assets/ceg_form.png"
import {InputLabel, Select} from "@mui/material";


const CompanyFormSection = () => {
    return (
        <SectionLayoutGrid id="form-section">
            <FormImageCol span={7} grid alignContent={"end"} justifyContent={"start"}>
                <CampImage src={cegform}/>
            </FormImageCol>
            <FormCol span={5}>
                <FamilyFormContainer>
                    <Col>
                        <Header2 marginBottom="small" textAlign="center" weight={"bolder"} sand={true}>Ajánlatkérés</Header2>
                    </Col>
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Teljes név:"}
                        required
                        name={"name"}

                    />
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Cégnév:"}
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
                        name={"name"}

                    />
                    <SelectControl variant="outlined" size="small" required>
                        <InputLabel id="package-label">Esemény típusa</InputLabel>
                        <Select
                            native
                            label="Esemény típusa:"
                            name={"type"}
                        >
                            <option aria-label="None" value=""/>
                            <option value="Céges nap">Céges nap</option>
                            <option value="Csapatépítő">Csapatépítő</option>
                            <option value="Céges családinap">Céges családinap</option>
                            <option value="Céges gyerektábor">Céges gyerektábor</option>
                        </Select>
                    </SelectControl>
                    <Input
                        size={"small"}
                        fullWidth
                        multiline
                        rows={3}
                        label={"Megjegyzés"}
                        required
                        name={"name"}

                    />
                    <Col grid justifyContent={"stretch"}>
                        <Buttonlink variant={"beige"}>Küldés</Buttonlink>
                    </Col>
                </FamilyFormContainer>
            </FormCol>

        </SectionLayoutGrid>

    );
};

export default CompanyFormSection;