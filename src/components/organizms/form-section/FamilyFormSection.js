import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col} from "../../atoms/styled/layout/layoutComponents";

import {
    Buttonlink,
    CampImage, FamilyFormContainer,
     Input, SelectControl
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";
import csaladform from "../../../../static/assets/családúj.png"
import {InputLabel, Select} from "@mui/material";

const FamilyFormSection = () => {
    return (
        <SectionLayoutGrid id="form-section">
            <Col span={7} grid alignContent={"end"} >
                <CampImage src={csaladform}/>
            </Col>
            <Col span={5} >
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
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Létszám:"}
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
                            <option value="Családinap">Családinap</option>
                            <option value="Baráti összejövetel">Baráti összejövetel</option>
                            <option value="Felnőtt születésnap">Felnőtt születésnap</option>
                            <option value="Gyerek születésnap">Gyerek születésnap</option>
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

            </Col>

        </SectionLayoutGrid>

    );
};

export default FamilyFormSection;