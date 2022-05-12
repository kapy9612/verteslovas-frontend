import React, {useReducer} from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {FormReducer, initialBirthdaysState, sendFormData} from "../reducers/FormReducer";

import {Col, FormCol, FormImageCol} from "../../atoms/styled/layout/layoutComponents";
import {
    Buttonlink,
    CampFormContainer,
    CampImage,
    Input,
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";

import taborform from "../../../../static/assets/tabor_form.png"
import {navigate} from "gatsby";

const BirthdayFormSection = () => {

    const [state, dispatch] = useReducer(FormReducer, initialBirthdaysState)

    return (
        <SectionLayoutGrid id="form-section">
            <FormImageCol span={7} grid alignContent={"end"}>
                <CampImage src={taborform}/>
            </FormImageCol>
            <FormCol span={5}>
                <CampFormContainer onSubmit={(e) => {
                    e.preventDefault()
                    sendFormData('forms-birthdays',state).then(function(response) {
                        if (response.status === 200) {
                            navigate('/koszonjuk')
                        }
                    }).catch(function(error) {
                        alert(error.response.data.message)
                    })
                }}>
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
                        name={"email"}
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
                        label={"Gyerekek száma:"}
                        required
                        type={"number"}
                        name={"child_count"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.child_count}
                    />
                    <Input
                        size={"small"}
                        span={6}
                        fullWidth
                        label={"Felnőttek száma:"}
                        type={"number"}
                        required
                        name={"adult_count"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.adult_count}
                    />
                    <Input
                        size={"small"}
                        fullWidth
                        multiline
                        rows={4}
                        label={"Kért programok:"}
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
                        <Buttonlink variant={"yellow"} type={"submit"}>Küldés</Buttonlink>
                    </Col>
                </CampFormContainer>
            </FormCol>

        </SectionLayoutGrid>

    );
};

export default BirthdayFormSection;
