import React, {useReducer} from 'react';
import {InputLabel, Select} from "@mui/material";

import {FormReducer, initialCompanyState, sendFormData} from "../reducers/FormReducer";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col, FormCol, FormImageCol} from "../../atoms/styled/layout/layoutComponents";
import {
    Buttonlink,
    CampImage, FamilyFormContainer,
     Input, SelectControl
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";

import cegform from "../../../../static/assets/ceg_form.png"
import {navigate} from "gatsby";

const CompanyFormSection = () => {

    const [state, dispatch] = useReducer(FormReducer, initialCompanyState)

    return (
        <SectionLayoutGrid id="form-section">
            <FormImageCol span={7} grid alignContent={"end"} justifyContent={"start"}>
                <CampImage src={cegform}/>
            </FormImageCol>
            <FormCol span={5}>
                <FamilyFormContainer onSubmit={(e) => {
                    e.preventDefault()
                    sendFormData('forms-companies',state).then(function(response) {
                        if (response.status === 200) {
                            navigate('/koszonjuk')
                        }
                    }).catch(function(error) {
                        alert(error.response.data.message)
                    })
                }}>
                    <Col>
                        <Header2 marginBottom="small" textAlign="center" weight={"bolder"} sand={true}>Ajánlatkérés</Header2>
                    </Col>
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Kapcsolattartó neve:"}
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
                        label={"Cégnév:"}
                        required
                        name={"company"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.company}
                    />
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Telefonszám:"}
                        span={6}
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
                        fullWidth
                        label={"Email:"}
                        required
                        name={"email"}
                        type={"email"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.email}
                    />
                    <Input
                        size={"small"}
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
                        span={6}
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

export default CompanyFormSection;