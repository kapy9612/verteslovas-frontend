import React from 'react';

import {Col} from "../../atoms/styled/layout/layoutComponents";

import { Title} from "../../atoms/styled/typography/typographyComponents";
import {
    Input, LongForm,
    WeddingButtonlink
} from "../styled/form-section/formsectionComponents";
import SectionLayoutGridWedding from "../../atoms/layout/SectionLayoutGridWedding";
import {TextField} from "@mui/material";

const WeddingFormSection = () => {
    return (
        <SectionLayoutGridWedding id="form-section">
            <Col>
                <Title marginBottom="smallest" textAlign="center"
                      sand={false}>Ajálatkérés
                </Title>

            </Col>
            <Col span={3}/>
            <Col span={6}>
                <LongForm>

                    <Input
                        size={"small"}
                        fullWidth
                        label={"Szervező neve:"}
                        required
                        variant="outlined"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Input
                        size={"small"}
                        fullWidth
                        type="email"
                        label={"Email:"}
                        required
                        variant="outlined"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Input
                        size={"small"}
                        fullWidth
                        label={"Telefonszám:"}
                        type="number"
                        required
                        variant="outlined"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Col>
                        <TextField
                            fullWidth
                            id="filled-textarea"
                            label="Megjegyzés"
                            multiline
                            rows={4}
                            variant="outlined"/>
                    </Col>

                    <Col grid justifyContent={"center"}>
                        <WeddingButtonlink variant={"beige"}>Küldés</WeddingButtonlink>

                    </Col>
                </LongForm>

            </Col>
        </SectionLayoutGridWedding>

    );
};

export default WeddingFormSection;
/*<Col span={1}/>
            <Col span={10} marginTop={"largest"}>
                <WeddingFormWrapper>
                    <CampImage src={eskuvoform}/>
                    <WeddingFormContainer>
                        <Header2 marginBottom="small" textAlign="center" weight={"bolder"}
                                 sand={false}>Ajánlatkérés</Header2>
                        <WeddingFormField placeholder={"Teljes név"}/>
                        <WeddingFormField placeholder={"Telefonszám"}/>
                        <WeddingFormField placeholder={"Email"}/>
                        <WeddingFormFieldTextArea id="id" name="megjegyzes" rows="4" cols="50"
                                                  placeholder={"Megjegyzés"}>
                        </WeddingFormFieldTextArea>
                        <WeddingButtonlink variant={"beige"}>Küldés</WeddingButtonlink>

                    </WeddingFormContainer>
                </WeddingFormWrapper>
                <Col span={1}/>

            </Col>*/
/* <SectionLayoutGridWedding id="form-section">
            <Col span={4}/>
            <Col span={4}>
                <WeddingFormContainer>
                    <Title marginBottom="medium" textAlign="center" weight={"bolder"}
                           sand={false}>Ajánlatkérés
                    </Title>
                    <WeddingFormField placeholder={"Teljes név"}/>
                    <WeddingFormField placeholder={"Telefonszám"}/>
                    <WeddingFormField placeholder={"Email"}/>
                    <WeddingFormFieldTextArea id="id" name="megjegyzes" rows="4" cols="50"
                                              placeholder={"Megjegyzés"}>
                    </WeddingFormFieldTextArea>
                    <WeddingButtonlink variant={"beige"}>Küldés</WeddingButtonlink>
                </WeddingFormContainer>

            </Col>
        </SectionLayoutGridWedding>*/