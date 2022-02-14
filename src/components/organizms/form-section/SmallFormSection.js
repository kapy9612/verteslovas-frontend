import React from 'react';
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {CampFormContainer} from "../../molecules/styled/form/formComponentes";
import {Header3} from "../../atoms/styled/typography/typographyComponents";
import {ButtonLink} from "../../atoms/styled/button/buttonComponents";
import {Img} from "../../atoms/styled/image/imageComponents";

import {ButtonContainer, FormContainer, TitleContainer} from "../styled/form-section/formsectionComponents";

const SmallFormSection = ({button, image, sand, description}) => {
    return (
        <SectionLayoutGrid>
            <Col span={6} alignContent={"end"} grid>
                <Img src={image}/>
            </Col>
            <Col span={5} >
                <FormContainer>
                    <TitleContainer sand={sand} textAlign={"center"} weight={"bold"} marginTop={"medium"} marginBottom={"medium"}>
                        {description}
                    </TitleContainer>
                    <ButtonContainer variant={button.color} children={button.title}/>
                </FormContainer>
            </Col>
        </SectionLayoutGrid>
    );
};
export default SmallFormSection;