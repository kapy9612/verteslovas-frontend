import React, {useReducer} from 'react';
import {InputLabel, Select} from "@mui/material";
import {graphql, navigate, useStaticQuery} from "gatsby";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {FormReducer, initialOurCampsState, sendFormData} from "../reducers/FormReducer";

import {Col, FormCol, FormImageCol} from "../../atoms/styled/layout/layoutComponents";
import {
    Buttonlink,
    CampFormContainer,
    CampImage,
    Input, SelectControl
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";

import taborform from "../../../../static/assets/tabor_form.png"

const CampFormSection = () => {

    const data = useStaticQuery(graphql`
    {
      strapiFormPrices {
        form_dates {
          kalandtabor_dates {
            from_to_date
          }
          lovastabor_dates {
            from_to_date
          }
        }
      }
    }
  `)

    const {strapiFormPrices : {form_dates: {kalandtabor_dates, lovastabor_dates}}} = data

    const [state, dispatch] = useReducer(FormReducer, initialOurCampsState)

    return (
        <SectionLayoutGrid id="form-section">
            <FormImageCol span={7} grid alignContent={"end"}>
                <CampImage src={taborform}/>
            </FormImageCol>
            <FormCol span={5}>
                <CampFormContainer onSubmit={(e) => {
                    e.preventDefault()
                    sendFormData('forms-our-camps',state).then(function(response) {
                        if (response.status === 200) {
                            navigate('/koszonjuk')
                        }
                    }).catch(function(error) {
                        alert(error.response.data.message)
                    })
                }}>
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
                    <SelectControl variant="outlined" size="small" required span={6}>
                        <InputLabel id="package-label">Tábor típusa</InputLabel>
                        <Select
                            native
                            label="Tábor típusa:"
                            name={"type"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.type}
                        >
                            <option aria-label="None" value=""/>
                            <option value="lovastabor">Lovastábor</option>
                            <option value="kalandtabor">Kalandtábor</option>
                        </Select>
                    </SelectControl>
                    <SelectControl variant="outlined" size="small" required disabled={!state.type} span={6}>
                        <InputLabel id="package-label">Tábor időpontja</InputLabel>
                        <Select
                            native
                            label="Tábor időpontja:"
                            name={"date"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.date}
                        >
                            <option aria-label="None" value=""/>
                            {kalandtabor_dates && state.type==="kalandtabor" && kalandtabor_dates.map((item, index) => (
                                <option value={item.from_to_date} key={index}>{item.from_to_date}</option>
                            ))}
                            {lovastabor_dates && state.type==="lovastabor" && lovastabor_dates.map((item, index) => (
                                <option value={item.from_to_date} key={index}>{item.from_to_date}</option>
                            ))}
                        </Select>
                    </SelectControl>
                    <Input
                        size={"small"}
                        fullWidth
                        multiline
                        rows={4}
                        label={"Gyerek/gyerekek neve és életkora, egyéb megjegyzés"}
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

export default CampFormSection;
