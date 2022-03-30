import React, {useState} from 'react';
import {Checkbox, FormControlLabel, FormGroup, InputAdornment, InputLabel, Select} from "@mui/material";

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Body, Title} from "../../atoms/styled/typography/typographyComponents";
import {
    ButtonContainer,
    Input,
    LongForm,
    SelectControl
} from "../styled/form-section/formsectionComponents";
import {ButtonLink} from "../../atoms/styled/button/buttonComponents";

const LongFormSection = () => {
    const [sum, setSum] = useState()
    const [children,setChildren]= useState()
    const [adult,setAdult]= useState()

    return (
        <SectionLayoutGrid background={"brown"}>
            <Col>
                <Title sand={true} textAlign={"center"} marginBottom={"small"} weight={"bold"}>Ajánlatkérés</Title>
                <Body textAlign={"center"} weight={"bold"}>
                    Állítsa össze táborát és nézze meg, hogy nagyjából mennyibe kerülne
                </Body>
                <Body textAlign={"center"} marginBottom={"small"} weight={"bold"}>
                    (Az ár csak tájékoztató jellegű)
                </Body>
            </Col>
            <Col>
                <LongForm>
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Szervező neve:"}
                        required
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        type="email"
                        label={"Email:"}
                        required
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Telefonszám:"}
                        type="number"
                        required
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <SelectControl variant="outlined" size="small" required>
                        <InputLabel id="package-label">Válassza ki hogy milyen tábort szeretne szervezni:</InputLabel>
                        <Select
                            native
                            label="Válassza ki hogy milyen tábort szeretne szervezni:"
                            //onChange={handleChange}
                            //value={values[item.name]}
                        >
                            <option aria-label="None" value=""/>
                            <option value="one-day">Egynapos</option>
                            <option value="more-days">Napközis (több napos tábor, minden nap hazamenetellel)</option>
                            <option value="more-days-sleep">Több nap ottalvással</option>
                        </Select>
                    </SelectControl>
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Tábor hossza"}
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">nap</InputAdornment>,
                        }}
                        type="number"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Tábor első napja"}
                        required
                        InputLabelProps={{shrink: true}}
                        InputProps={{
                            shrink: false,
                        }}
                        type="date"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Tábor utolsó napja"}
                        required
                        InputLabelProps={{shrink: true}}
                        type="date"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Col>
                        <Body marginTop={"medium"}>Fiú és lány gyerekek száma azért fontos, hogy a szálláson a fiúk és a
                            lányok
                            külön szobákba/jurtákba kerüljenek.</Body>
                    </Col>
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Felnőttek száma"}
                        required
                        onChange={() => setAdult(3)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">fő</InputAdornment>,
                        }}
                        type="number"
                        //onChange={handleChange}
                        //value={this.state.value}
                    />
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Lány gyerekek száma"}
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">fő</InputAdornment>,
                        }}
                        type="number"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Fiú gyerekek száma"}
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">fő</InputAdornment>,
                        }}
                        type="number"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Col span={12}>
                        <Body>Összesen: x fő</Body>
                    </Col>
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Legfiatalabb gyerek"}
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">év</InputAdornment>,
                        }}
                        type="number"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Legidősebb gyerek"}
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">év</InputAdornment>,
                        }}
                        type="number"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Col>
                        <Body weight={"bold"} marginTop={"medium"}>A szállások pontos egyeztetése telefonon fog
                            megtörténni, a kalkulátor egy átlag árral számol a szálllásért!</Body>
                        <Body>Kérem válassza ki mely szállásokat preferálná :</Body>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="Jurta 6x8 fő"/>
                            <FormControlLabel control={<Checkbox/>} label="Parasztház 2x15 fő"/>
                            <FormControlLabel control={<Checkbox/>}
                                              label="Apartman 2db 2szobás apartman (szobánlént 2-2 emeletes ágy)"/>
                            <FormControlLabel control={<Checkbox/>} label="Tetőtér 23fő"/>
                            <FormControlLabel control={<Checkbox/>}
                                              label="Metzger (Alsó 2x10fő) (Felső 10x4fő és 1x8fő)"/>
                            <FormControlLabel control={<Checkbox/>} label="Lovas házak 5fő/ház"/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Body marginTop={"medium"}>Kérem válassza ki milyen étkezéseket kér:</Body>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="Teljes ellátás (reggeli, ebéd, vacsora)"/>
                            <FormControlLabel control={<Checkbox/>} label="Reggeli"/>
                            <FormControlLabel control={<Checkbox/>} label="Ebéd"/>
                            <FormControlLabel control={<Checkbox/>} label="Vacsora"/>
                            <FormControlLabel control={<Checkbox/>} label="Tízórai és uzsonna"/>
                            <FormControlLabel control={<Checkbox/>} label="Kemencés langaló készítése egy alkalommal"/>
                            <FormControlLabel control={<Checkbox/>} label="Fedetlen tűzrakóhely(egy napra)"/>
                            <FormControlLabel control={<Checkbox/>} label="Semmi"/>
                        </FormGroup>
                        <Body weight={"bold"} marginTop={"small"}>Ételalergia esetén 20-30%-os felárat számítunk
                            fel</Body>

                    </Col>
                    <Input
                        span={3}
                        size={"small"}
                        fullWidth
                        label={"Ételérzékenyek száma"}
                        required
                        InputLabelProps={{shrink: true}}

                        InputProps={{
                            endAdornment: <InputAdornment position="end">fő</InputAdornment>,
                        }}
                        type="number"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Input
                        span={9}
                        size={"small"}
                        fullWidth
                        label={"Ételérzékenységek"}
                        type="text"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Col>
                        <Body marginTop={"medium"} weight={"bold"}>Ottalvós tábor esetén ahány
                            animátort kérnek a csoport mellé, annyi felnőtt teljes allátása és szállása ingyen
                            van!</Body>
                        <Body>
                            Az animátor vezeti és koordinálja a programokat, felügyel a biztonságra, igény esetén a
                            csapattal éjszakázik.(18 főnként 1 animátor ajánlott)
                        </Body>
                    </Col>
                    <Input
                        span={3}
                        size={"small"}
                        fullWidth
                        label={"Animátorok száma"}
                        required
                        InputLabelProps={{shrink: true}}

                        InputProps={{
                            endAdornment: <InputAdornment position="end">fő</InputAdornment>,
                        }}
                        type="number"
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Col>
                        <Body marginTop={"medium"} weight={"bold"}>Medencehasználat, medencáing nem fűtöttek (ottalvós
                            tábor ára tartalmazza)</Body>

                    </Col>
                    <Input
                        span={3}
                        size={"small"}
                        fullWidth
                        required
                        InputLabelProps={{shrink: true}}
                        label={"Emberek száma"}
                        type="number"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">fő</InputAdornment>,
                        }}
                        //onChange={handleChange}
                        //value={values[item.name]}
                    />
                    <Col>
                        <Body marginTop={"medium"} weight={"bold"}>Aktív és kézműves programjaink kizárólag képzett
                            animátoraink segítségével vehetők igénybe!</Body>
                        <Body>Szolgáltatások menüpont alatt pontosabb leírást kap programjainkról!</Body>

                    </Col>
                    <Col span={6}>
                        <Body>Válasszon aktív játékaink közül:</Body>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="Bungee trambulin (Max. 180 cm és 80 kg )"/>
                            <FormControlLabel control={<Checkbox/>} label="Falmászás (Max. 80 kg)"/>
                            <FormControlLabel control={<Checkbox/>} label="3d karika (150-190 cm-ig)"/>
                            <FormControlLabel control={<Checkbox/>} label="Buborékfoci (130cm-től)"/>
                            <FormControlLabel control={<Checkbox/>} label="Lovaspróba"/>
                            <FormControlLabel control={<Checkbox/>} label="Íjászat"/>
                        </FormGroup>
                    </Col>
                    <Col span={6}>
                        <Body>Válasszon kézműves programjaink közül:</Body>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="Gyöngyfűzés "/>
                            <FormControlLabel control={<Checkbox/>} label="Cserépfestés "/>
                            <FormControlLabel control={<Checkbox/>} label="Batikolás (pólót nem biztosítunk) "/>
                            <FormControlLabel control={<Checkbox/>} label="Kavicsfestés "/>
                            <FormControlLabel control={<Checkbox/>} label="Ytong faragás "/>

                        </FormGroup>
                    </Col>
                    <Col>
                        <Body>Válasszon csoportos programjaink közül (animátort nem igényelnek):</Body>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="Sváb tájház blátogatás (/csoport) "/>
                            <FormControlLabel control={<Checkbox/>} label="Kisállat bemutató (/nap) "/>
                            <FormControlLabel control={<Checkbox/>} label="Pusztakocsizás (/turnus) "/>
                            <FormControlLabel control={<Checkbox/>} label="Suttogó bemutató (/csoport) "/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Body>Terembérlés:</Body>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="1 "/>
                            <FormControlLabel control={<Checkbox/>} label="2 "/>
                            <FormControlLabel control={<Checkbox/>} label="3 "/>
                            <FormControlLabel control={<Checkbox/>} label="4 "/>
                        </FormGroup>
                    </Col>
                    <Col span={6}>
                        <Body>Összesen: xxxft</Body>

                    </Col>
                    <Col span={6}>
                        <Body>{adult}</Body>
                    </Col>
                    <ButtonContainer to={"/szervezznalunktaborokat"} variant={"yellow"}>Vissza</ButtonContainer>


                </LongForm>
            </Col>
        </SectionLayoutGrid>

    );
};

export default LongFormSection;
