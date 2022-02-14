import React from 'react';
import {Body, Header3} from "../../atoms/styled/typography/typographyComponents";
import {CampFormContainer} from "../styled/form/formComponentes";
import {ButtonLink} from "../../atoms/styled/button/buttonComponents";
import {FormField} from "../../atoms/styled/formField/formFieldComponents";

const CampForm = ({title, button, placeholder, color, sand, titlePosition, buttonColor}) => {
    return (
        <CampFormContainer color={color}>
            <Header3 sand={sand} marginBottom={"small"} weight={sand ? "bold" :"regular"} textAlign={!titlePosition ? "center" : "left"}
                     >
                {title}
            </Header3>
            <FormField placeholder={placeholder}/>
            <FormField placeholder={placeholder}/>
            <FormField placeholder={placeholder}/>
            <FormField placeholder={placeholder}/>
            <FormField placeholder={placeholder}/>

            <ButtonLink variant={buttonColor ? "yellow" : "beige"}>{button}</ButtonLink>
        </CampFormContainer>
    );
};

export default CampForm;