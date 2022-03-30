import React, {useState} from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Body, Title} from "../../atoms/styled/typography/typographyComponents";

import {
     LongFormContainer,
    LongFormFContainer,
    LongFormFieldWrapper,
    LongFormWrapper,
    RadioLabel, RadioWrapper, SmallFormFieldWrapper
} from "../styled/form-section/formsectionComponents";
import {FormField} from "../../atoms/styled/formField/formFieldComponents";



const LongFormSection = () => {
    return (
        <SectionLayoutGrid id="form-section" background={"brown"}>
            <Col>
                <Title sand={true} textAlign={"center"} marginBottom={"small"} weight={"bold"}>Ajánlatkérés</Title>
                <Body textAlign={"center"} weight={"bold"}>Állítsa össze táborát és nézze meg, hogy nagyjából mennyibe
                    kerülne</Body>
                <Body textAlign={"center"} marginBottom={"largest"} weight={"bold"}>(Az ár csak tájékoztató
                    jellegű)</Body>
                <LongFormFContainer>
                    <LongFormWrapper>
                        <LongFormFieldWrapper>
                            <Body weight={"bold"}> Szervező neve:</Body>
                            <FormField type="text" id="szervezoNeve" name="szervezoNeve"/>
                        </LongFormFieldWrapper>
                        <LongFormFieldWrapper>
                            <Body weight={"bold"}> E-mail:</Body>
                            <FormField type="text" id="email" name="email"/>
                        </LongFormFieldWrapper>
                        <LongFormFieldWrapper>
                            <Body weight={"bold"}> Telefonszám:</Body>
                            <FormField type="text" id="telefonszam" name="telefonszam"/>
                        </LongFormFieldWrapper>
                    </LongFormWrapper>

                    <div>
                        <Body weight={"bold"}> Válassza ki hogy milyen tábort szeretne szervezni:</Body>
                        <RadioWrapper>
                            <RadioLabel>Több nap ottalvással</RadioLabel><input type="radio" name="ottalvos"
                                                                                value="ottalvos"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Napközis (több napos tábor, minden nap hazamenetellel)</RadioLabel><input
                            type="radio" name="ottalvos" value="napközis"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Egynapos</RadioLabel><input type="radio" name="ottalvos" value="egynapos"/>
                        </RadioWrapper>
                    </div>


                    <LongFormWrapper>
                        <SmallFormFieldWrapper>
                            <Body weight={"bold"}> Tábor hossza:</Body>
                            <FormField type="number" id="taborhossza" name="taborhossza"/>
                            <Body> nap</Body>
                        </SmallFormFieldWrapper>
                        <LongFormFieldWrapper>
                            <Body weight={"bold"}> Első nap:</Body>
                            <FormField type="date" id="email" name="email"/>
                        </LongFormFieldWrapper>
                        <LongFormFieldWrapper>
                            <Body weight={"bold"}> Utolsó nap:</Body>
                            <FormField type="date" id="telefonszam" name="telefonszam"/>
                        </LongFormFieldWrapper>
                    </LongFormWrapper>

                    <Body weight={"bold"}>Fiú és lány gyerekek száma azért fontos, hogy a szálláson a fiúk és a lányok
                        külön szobákba/jurtákba kerüljenek.</Body>
                    <LongFormWrapper>
                        <LongFormFieldWrapper>
                            <Body weight={"bold"}>Felnőttek száma:</Body>
                            <FormField type="number" id="felnottek" name="felnottek"/>
                        </LongFormFieldWrapper>
                        <LongFormFieldWrapper>
                            <Body weight={"bold"}> Lányok száma:</Body>
                            <FormField type="number" id="lanyokSzama" name="lanyokSzama"/>
                        </LongFormFieldWrapper>
                        <LongFormFieldWrapper>
                            <Body weight={"bold"}> Fiúk száma:</Body>
                            <FormField type="number" id="fiukSzama" name="fiukSzama"/>
                        </LongFormFieldWrapper>
                        <Body>Összesen:x fő</Body>
                    </LongFormWrapper>


                    <LongFormWrapper>
                        <SmallFormFieldWrapper>
                            <Body weight={"bold"}>Legfiatalabb gyerek életkora:</Body>
                            <FormField type="number" id="legfiatalabb" name="legfiatalabb"/>
                            <Body> éves</Body>
                        </SmallFormFieldWrapper>
                        <SmallFormFieldWrapper>
                            <Body weight={"bold"}> Legidősebb gyerek életkora:</Body>
                            <FormField type="number" id="legidosebb" name="legidosebb"/>
                            <Body> éves</Body>
                        </SmallFormFieldWrapper>
                    </LongFormWrapper>

                    <div>
                        <Body weight={"bold"} marginTop={"large"} marginBottom={"small"}>A szállások pontos egyeztetése
                            telefonon fog
                            megtörténni, a kalkulátor egy átlag árral számol a szálllásért!</Body>


                        <Body weight={"bold"}>Kérem válassza ki mely szállásokat preferálná:</Body>
                        <RadioWrapper>
                            <RadioLabel>Jurta 6x8 fő</RadioLabel>
                            <input type="checkbox" name="szallas" value="jurta"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Parasztház 2x15 fő</RadioLabel>
                            <input type="checkbox" name="szallas" value="paraszt"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Apartman 2db 2szobás apartman (szobánlént 2-2 emeletes ágy)</RadioLabel>
                            <input type="checkbox" name="szallas" value="apartman"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Tetőtér 23fő</RadioLabel>
                            <input type="checkbox" name="szallas" value="tetoter"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Metzger (Alsó 2x10fő) (Felső 10x4fő és 1x8fő)</RadioLabel>
                            <input type="checkbox" name="szallas" value="metzger"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Lovas házak 5fő/ház </RadioLabel>
                            <input type="checkbox" name="szallas" value="lovasház"/>
                        </RadioWrapper>
                    </div>

                    <div>
                        <Body weight={"bold"}>Kérem válassza ki milyen étkezéseket kér: </Body>
                        <RadioWrapper>
                            <RadioLabel>Teljes ellátás (reggeli, ebéd, vacsora)</RadioLabel>
                            <input type="checkbox" name="etkezes" value="teljesEllatas"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Reggeli</RadioLabel>
                            <input type="checkbox" name="etkezes" value="reggeli"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Ebéd </RadioLabel>
                            <input type="checkbox" name="etkezes" value="ebed"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Vacsora </RadioLabel>
                            <input type="checkbox" name="etkezes" value="vacsora"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Tízórai és uzsonna</RadioLabel>
                            <input type="checkbox" name="etkezes" value="tizoraiUzsonna"/>
                        </RadioWrapper>
                        <RadioWrapper>
                            <RadioLabel>Semmi </RadioLabel>
                            <input type="checkbox" name="etkezes" value="semmi"/>
                        </RadioWrapper>
                        <Body weight={"bold"}>Ételalergia esetén 20-30%-os felárat számítunk fel </Body>
                        <LongFormFieldWrapper>
                            <Body weight={"bold"}> Ételérzékenyek száma és érzékenysége:</Body>
                            <FormField type="text" id="fiukSzama" name="etelErzekenyseg"/>
                        </LongFormFieldWrapper>
                    </div>

                    <div>
                        <Body weight={"bold"} marginTop={"medium"} marginBottom={"small"}>Ottalvós tábor esetén ahány
                            animátort kérnek a csoport mellé, annyi felnőtt teljes allátása és szállása ingyen
                            van! </Body>
                        <LongFormContainer>
                            <SmallFormFieldWrapper>
                                <Body weight={"bold"}>Animátorok száma</Body>
                                <FormField type="number" id="animator" name="animator"/>
                                <Body> db</Body>
                            </SmallFormFieldWrapper>

                            <SmallFormFieldWrapper>
                                <Body weight={"bold"}>Aktív játékok:</Body>
                            </SmallFormFieldWrapper>
                            <SmallFormFieldWrapper>
                                <Body weight={"bold"}>Programok csoportoknak:</Body>

                            </SmallFormFieldWrapper>
                        </LongFormContainer>

                    </div>


                </LongFormFContainer>
            </Col>
        </SectionLayoutGrid>

    );
};

export default LongFormSection;
