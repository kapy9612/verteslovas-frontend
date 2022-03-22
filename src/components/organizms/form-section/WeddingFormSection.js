import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {
    WeddingFormContainer,
    WeddingFormField, WeddingFormFieldTextArea,
    WeddingFormWrapper
} from "../../molecules/styled/form/formComponentes";
import {Header2} from "../../atoms/styled/typography/typographyComponents";
import {
    CampImage,
    WeddingButtonlink
} from "../styled/form-section/formsectionComponents";
import eskuvoform from "../../../../static/assets/couple2.png"

const WeddingFormSection = () => {
    return (
        <SectionLayoutGrid>
            <Col span={1}/>
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

            </Col>
        </SectionLayoutGrid>

    );
};

export default WeddingFormSection;