import React from 'react';
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Img} from "../../atoms/styled/image/imageComponents";

import {ButtonContainer, FormContainer, TitleContainer} from "../styled/form-section/formsectionComponents";

const SmallFormSection = ({button, image, sand, description}) => {
    return (
        <SectionLayoutGrid id={"smallFormSection"}>
            <Col span={7} alignContent={"end"} grid>
                <Img src={image}/>
            </Col>
            <Col span={5} >
                <FormContainer>
                    <TitleContainer sand={true} textAlign={"center"} weight={"bold"} marginTop={"medium"} marginBottom={"smallest"}>
                        Állítsd össze milyen programokat szeretnél és küldd el nekünk! 
                    </TitleContainer>
                    <ButtonContainer variant={"yellow"} children={"Tovább"}/>
                </FormContainer>
            </Col>
        </SectionLayoutGrid>
    );
};
export default SmallFormSection;