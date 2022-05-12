import React, {useReducer} from 'react';

import SectionLayoutGridWedding from "../../atoms/layout/SectionLayoutGridWedding";
import {FormReducer, initialWeddingState, sendFormData} from "../reducers/FormReducer";

import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";
import {
    Input, LongForm,
    WeddingButtonlink
} from "../styled/form-section/formsectionComponents";
import {navigate} from "gatsby";

const WeddingFormSection = () => {

    const [state, dispatch] = useReducer(FormReducer, initialWeddingState)

    return (
        <SectionLayoutGridWedding id="form-section">
            <Col>
                <Title marginBottom="smallest" textAlign="center"
                       sand={false}>Ajálatkérés
                </Title>
            </Col>
            <Col span={3}/>
            <Col span={6}>
                <LongForm onSubmit={(e) => {
                    e.preventDefault()
                    sendFormData('forms-weddings',state).then(function(response) {
                        if (response.status === 200) {
                            navigate('/koszonjuk')
                        }
                    }).catch(function(error) {
                        alert(error.response.data.message)
                    })
                }}>
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Szervező neve:"}
                        required
                        variant="outlined"
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
                        fullWidth
                        type="email"
                        label={"Email:"}
                        required
                        variant="outlined"
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
                        fullWidth
                        label={"Telefonszám:"}
                        required
                        variant="outlined"
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
                        label={"Megjegyzés:"}
                        multiline
                        rows={4}
                        required
                        variant="outlined"
                        name={"message"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.message}
                    />
                    <Col grid justifyContent={"center"}>
                        <WeddingButtonlink variant={"beige"} type="submit">Küldés</WeddingButtonlink>
                    </Col>
                </LongForm>
            </Col>
        </SectionLayoutGridWedding>

    );
};

export default WeddingFormSection;