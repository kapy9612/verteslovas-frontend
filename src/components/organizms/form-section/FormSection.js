import React from 'react';
import {Body, Title} from "../../atoms/styled/typography/typographyComponents";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import Form from "../../molecules/forms/CampForm";

const FormSection = ({title, leftImage, button, color, sand, placeholder, image, titlePosition, buttonColor}) => {
    return (
        <div>
            {leftImage ?
                <SectionLayoutGrid>
                    <Col span={6} alignContent={"end"} grid>
                        <img src={image}/>
                    </Col>
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
                </SectionLayoutGrid>
                :
                <SectionLayoutGrid>
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
                        <img src={image}/>
                    </Col>
                </SectionLayoutGrid>
            }
        </div>

    );
};

export default FormSection;