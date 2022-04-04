import React from 'react';
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Img} from "../../atoms/styled/image/imageComponents";

import {
    ButtonContainer,
    CampFormContainer,
    TitleContainer
} from "../styled/form-section/formsectionComponents";

const SmallFormSection = ({button, image, sand, description}) => {
    return (
        <SectionLayoutGrid id="form-section">
            <Col span={7} alignContent={"end"} grid>
                <Img src={image}/>
            </Col>
            <Col span={5} grid alignSelf={"end"} >
                <CampFormContainer>
                    <Col grid alignContent={"center"}>
                        <TitleContainer sand={true} textAlign={"center"} weight={"bold"} marginTop={"medium"} >
                            Állítsd össze milyen programokat szeretnél és küldd el nekünk!
                        </TitleContainer>
                    </Col>
                    <Col justifyContent={"stretch"} grid>
                        <ButtonContainer to={"/form"} variant={ "yellow" }>Tovább</ButtonContainer>
                    </Col>
                </CampFormContainer>
            </Col>
        </SectionLayoutGrid>
    );
};
export default SmallFormSection;