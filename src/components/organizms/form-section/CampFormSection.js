import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col, DesktopCol, FormCol, FormImageCol} from "../../atoms/styled/layout/layoutComponents";

import {
    Buttonlink,
    CampFormContainer,
    CampImage,
    Input, SelectControl
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";
import taborform from "../../../../static/assets/tabor_form.png"
import {InputLabel, Select} from "@mui/material";

const CampFormSection = () => {
    return (
        <SectionLayoutGrid id="form-section">
            <FormImageCol span={7} grid alignContent={"end"}>
                <CampImage src={taborform}/>
            </FormImageCol>
            <FormCol span={5}>
                <CampFormContainer>
                    <Col>
                        <Header2 marginBottom="small" textAlign="center" weight={"bolder"} sand={"true"}>Jelentkezz
                            táborainkba!</Header2>
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
                    <SelectControl variant="outlined" size="small" required>
                        <InputLabel id="package-label">Tábor típusa</InputLabel>
                        <Select
                            native
                            label="Tábor típusa:"
                            name={"type"}
                        >
                            <option aria-label="None" value=""/>
                            <option value="lovas">Lovastábor</option>
                            <option value="kalnad">Kalandtábor</option>
                        </Select>
                    </SelectControl>
                    <SelectControl variant="outlined" size="small" required>
                        <InputLabel id="package-label">Tábor időpontja</InputLabel>
                        <Select
                            native
                            label="Tábor időpontja:"
                            name={"type"}
                        >
                            <option aria-label="None" value=""/>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3l</option>
                        </Select>
                    </SelectControl>
                    <Input
                        size={"small"}
                        fullWidth
                        multiline
                        rows={4}
                        label={"Gyerek/gyerekek neve és életkora, egyéb megjegyzés"}
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

export default CampFormSection;
