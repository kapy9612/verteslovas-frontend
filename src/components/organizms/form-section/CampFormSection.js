import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Img} from "../../atoms/styled/image/imageComponents";
import {
    MainCardLeftImg,
    MainCardSectionContainer,
    MainRightCardContainer
} from "../styled/card-section/cardSectionComponents";
import CampCard from "../../molecules/cards/ChildCard";
import {
    Buttonlink,
    CampFormContainer,
    CampImage,
    FormFieldSelect,
    FormFieldTextArea
} from "../styled/form-section/formsectionComponents";
import {Header2} from "../../atoms/styled/typography/typographyComponents";
import {ChildCardContainer} from "../../molecules/styled/cards/cardComponents";
import {FormField} from "../../atoms/styled/formField/formFieldComponents";
import {ButtonLink} from "../../atoms/styled/button/buttonComponents";

const CampFormSection = ({card}) => {
    return (
        <SectionLayoutGrid>
            <Col span={7} grid alignContent={"end"}>
                <CampImage src={card.image.localFile.publicURL}/>
            </Col>
            <Col span={5}>
                <CampFormContainer>
                    <Header2 marginBottom="small" textAlign="center" weight={"bolder"} sand={"true"}>Jelentkezz
                        táborainkba!</Header2>
                    <FormField placeholder={"Szülő neve"}/>
                    <FormField placeholder={"Telefonszám"}/>
                    <FormField placeholder={"Email"}/>
                    <FormFieldSelect placeholder={"Tábor típusa"} id="taborok" name="tábprok">
                        <option value={0}>Tábor fajtája</option>
                        <option value="Lovastábor">Lovastábor</option>
                        <option value="Kalandtábor">Kalandtábor</option>
                    </FormFieldSelect>
                    <FormFieldSelect placeholder={"Tábor időpont"} id="idopont" name="időpont">
                        <option value={0}>Tábor időpontja</option>
                        <option value="juni1">2022.01.01-2022.09.05</option>
                        <option value="juli2">2022.08.01-2022.09.05</option>
                    </FormFieldSelect>
                    <FormFieldTextArea id="id" name="megjegyzes" rows="4" cols="50" placeholder={"Gyerek/gyerekek neve és életkora, egyéb megjegyzés"}>
                    </FormFieldTextArea>

                    <Buttonlink variant={"yellow" }>Küldés</Buttonlink>

                </CampFormContainer>
            </Col>

        </SectionLayoutGrid>

    );
};

export default CampFormSection;