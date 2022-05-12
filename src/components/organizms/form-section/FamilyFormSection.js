import React, {useReducer} from 'react';
import {InputLabel, Select} from "@mui/material";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {FormReducer, initialFamilyState, sendFormData} from "../reducers/FormReducer";

import {Col, FormCol, FormImageCol} from "../../atoms/styled/layout/layoutComponents";
import {
    Buttonlink,
    CampImage, FamilyFormContainer,
    Input, SelectControl
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";

import csaladform from "../../../../static/assets/családúj.png"
import {navigate} from "gatsby";

const FamilyFormSection = () => {

    const [state, dispatch] = useReducer(FormReducer, initialFamilyState)

    return (
        <SectionLayoutGrid id="form-section">
            <FormImageCol span={7} grid alignContent={"end"}>
                <CampImage src={csaladform}/>
            </FormImageCol>
            <FormCol span={5}>
                <FamilyFormContainer onSubmit={(e) => {
                    e.preventDefault()
                    sendFormData('forms-families',state).then(function(response) {
                        if (response.status === 200) {
                            navigate('/koszonjuk')
                        }
                    }).catch(function(error) {
                        alert(error.response.data.message)
                    })
                }}>
                    <Col>
                        <Header2 marginBottom="small" textAlign="center" weight={"bolder"}
                                 sand={true}>Ajánlatkérés</Header2>
                    </Col>
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Teljes név:"}
                        required
                        name={"name"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.name}
                    />
                    <Input
                        size={"small"}
                        span={6}
                        fullWidth
                        label={"Telefonszám:"}
                        required
                        name={"phone"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.phone}
                    />
                    <Input
                        size={"small"}
                        span={6}
                        fullWidth
                        label={"Email:"}
                        required
                        type={"email"}
                        name={"name"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.email}
                    />
                    <Input
                        size={"small"}
                        span={6}
                        fullWidth
                        label={"Létszám:"}
                        type={"number"}
                        required
                        name={"count"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.count}
                    />
                    <SelectControl variant="outlined" size="small" required span={6}>
                        <InputLabel id="package-label">Esemény típusa</InputLabel>
                        <Select
                            native
                            label="Esemény típusa:"
                            name={"type"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.type}
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
                        name={"message"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.message}

                    />
                    <Col grid justifyContent={"stretch"}>
                        <Buttonlink variant={"beige"} type={"submit"}>Küldés</Buttonlink>
                    </Col>
                </FamilyFormContainer>
            </FormCol>
        </SectionLayoutGrid>

    );
};

export default FamilyFormSection;