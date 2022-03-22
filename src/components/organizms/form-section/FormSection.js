import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import Form from "../../molecules/forms/CampForm";

import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Img} from "../../atoms/styled/image/imageComponents";

const FormSection = ({title, leftImage, button, color, sand, placeholder, image, titlePosition, buttonColor}) => {
    return (
        <SectionLayoutGrid id="form-section">
            {leftImage ?
                <>
                    <Col span={6} alignContent={"end"} grid>
                        <Img src={image}/>
                    </Col>
                    <Col span={4} justifyContent={"end"} grid>
                        <Form
                            color={color}
                            title={title}
                            placeholder={placeholder}
                            button={button}
                            sand={sand}
                            titlePosition={titlePosition}
                            buttonColor={buttonColor}
                        />
                    </Col>
                </>
                :
                <>
                    <Col span={4}>
                        <Form
                            color={color}
                            title={title}
                            placeholder={placeholder}
                            button={button}
                            sand={sand}
                            titlePosition={titlePosition}
                            buttonColor={buttonColor}
                        />
                    </Col>
                    <Col span={6} alignContent={"end"} grid>
                        <Img src={image}/>
                    </Col>
                </>
            }
        </SectionLayoutGrid>

    );
};

export default FormSection;