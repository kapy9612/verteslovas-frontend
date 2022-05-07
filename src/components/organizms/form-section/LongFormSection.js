import React, {useReducer} from 'react';
import {Checkbox, FormControlLabel, FormGroup, InputAdornment, InputLabel, Select} from "@mui/material";

import {FormReducer, initialState} from "../reducers/FormReducer";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Body, Title} from "../../atoms/styled/typography/typographyComponents";
import {
    ButtonContainer,
    Input,
    LongForm,
    SelectControl
} from "../styled/form-section/formsectionComponents";

const LongFormSection = () => {

    const [state, dispatch] = useReducer(FormReducer, initialState)

    const campLength = ((new Date(state.last_date).getTime() - new Date(state.first_date).getTime()) / (1000 * 3600 * 24))
    const peopleNumber = Number(state.child_number) + Number(state.adults_number)
    const peopleNumberSleep = Number(state.adults_number) + Number(state.boys_number) + Number(state.girls_number)
    const childCount = Number(state.boys_number) + Number(state.girls_number)

    function CalculateAnimators(animators) {
        if (animators > Number(state.adults_number)) {
            return 0
        } else if (animators < Number(state.adults_number)) {
            return Number(state.adults_number) - animators
        } else if (animators === Number(state.adults_number)) {
            return 0
        }
    }

    const calcMaxWithAnimators = CalculateAnimators(Number(state.animator_number)) + Number(state.boys_number) + Number(state.girls_number)

    const priceSleep = (4000 * calcMaxWithAnimators * campLength) +
        (((state.food.teljes && 4095) + (state.food.reggeli && 1400) + (state.food.ebed && 1990) + (state.food.vacsora && 1800) + (state.food.tizoraiuzsonna && 850)) * (calcMaxWithAnimators) * campLength) +
        (state.food.tuzrako && 6000) +
        (state.food.langallo && 1500 * (calcMaxWithAnimators)) +
        (Number(state.animator_number) * 25400 * campLength) +
        (1651 * calcMaxWithAnimators) +
        (state.group_program.svab_tajhaz && 8890) +
        (state.group_program.kisallat && 48810) +
        (state.group_program.pusztakocsi && 36720) +
        (state.group_program.suttogo && 26670) +
        (((state.active_games.bungee && 1270) + (state.active_games.falmaszas && 1270) + (state.active_games.karika && 1270) + (state.active_games.buborekfoci && 1270) + (state.active_games.lovasproba && 1270) + (state.active_games.ijaszat && 1270)) * childCount) +
        (((state.craftsman.gyongy && 1486) + (state.craftsman.cserep && 1486) + (state.craftsman.batokilas && 1486) + (state.craftsman.kavics && 1486) + (state.craftsman.ytong && 1486)) * childCount);
//1x kell terulethasznalati
    const price = (((state.food.teljes && 4095) + (state.food.reggeli && 1400) + (state.food.ebed && 1990) + (state.food.vacsora && 1800) + (state.food.tizoraiuzsonna && 850)) * peopleNumber * campLength) +
        (state.food.tuzrako && 6000) +
        (state.food.langallo && 1500 * peopleNumber) +
        (Number(state.animator_number) * 25400 * campLength) +
        (1651 * peopleNumber) +
        (state.group_program.svab_tajhaz && 8890) +
        (state.group_program.kisallat && 48810) +
        (state.group_program.pusztakocsi && 36720) +
        (state.group_program.suttogo && 26670) +
        (((state.active_games.bungee && 1270) + (state.active_games.falmaszas && 1270) + (state.active_games.karika && 1270) + (state.active_games.buborekfoci && 1270) + (state.active_games.lovasproba && 1270) + (state.active_games.ijaszat && 1270)) * Number(state.child_number)) +
        (((state.craftsman.gyongy && 1486) + (state.craftsman.cserep && 1486) + (state.craftsman.batokilas && 1486) + (state.craftsman.kavics && 1486) + (state.craftsman.ytong && 1486)) * Number(state.child_number));
//minden nap fizet terulethsznalatit
    const priceOne = (((state.food.teljes && 4095) + (state.food.reggeli && 1400) + (state.food.ebed && 1990) + (state.food.vacsora && 1800) + (state.food.tizoraiuzsonna && 850)) * peopleNumber) +
        (state.food.tuzrako && 6000) +
        (state.food.langallo && 1500 * peopleNumber) +
        (Number(state.animator_number) * 25400) +
        (1651 * peopleNumber) +
        (state.group_program.svab_tajhaz && 8890) +
        (state.group_program.kisallat && 48810) +
        (state.group_program.pusztakocsi && 36720) +
        (state.group_program.suttogo && 26670) +
        (((state.active_games.bungee && 1270) + (state.active_games.falmaszas && 1270) + (state.active_games.karika && 1270) + (state.active_games.buborekfoci && 1270) + (state.active_games.lovasproba && 1270) + (state.active_games.ijaszat && 1270)) * Number(state.child_number)) +
        (((state.craftsman.gyongy && 1486) + (state.craftsman.cserep && 1486) + (state.craftsman.batokilas && 1486) + (state.craftsman.kavics && 1486) + (state.craftsman.ytong && 1486)) * Number(state.child_number));
//kell egy megjegyzes mező a végére
    return (
        <SectionLayoutGrid background={"brown"} customPadding={"firstElement"}>
            <Col>
                <Title sand={true} textAlign={"center"} marginBottom={"small"} weight={"bold"}>Ajánlatkérés</Title>
                <Body textAlign={"center"} weight={"bold"}>
                    Állítsa össze táborát és nézze meg, hogy kb. mennyibe kerülne.
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
                        name={"name"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.name}
                    />
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        type="email"
                        label={"Email:"}
                        required
                        name={"email"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.email}
                    />
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Telefonszám:"}
                        type="number"
                        required
                        name={"phone"}
                        onChange={(e) => dispatch({
                            type: "SET_STATE",
                            value: e.target.value,
                            name: e.target.name
                        })}
                        value={state.phone}
                    />
                    <SelectControl variant="outlined" size="small" required>
                        <InputLabel id="package-label">Válassza ki hogy milyen tábort szeretne szervezni:</InputLabel>
                        <Select
                            native
                            label="Válassza ki hogy milyen tábort szeretne szervezni:"
                            name={"type"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.type}
                        >
                            <option aria-label="None" value=""/>
                            <option value="one-day">Egynapos</option>
                            <option value="more-days">Napközis (több napos tábor, minden nap hazamenetellel)</option>
                            <option value="more-days-sleep">Több nap ottalvással</option>
                        </Select>
                    </SelectControl>
                    {state.type === "one-day" &&
                    <>
                        <Input
                            span={4}
                            size={"small"}
                            fullWidth
                            label={"Tábor időpontja"}
                            required
                            InputLabelProps={{shrink: true}}
                            type="date"
                            name={"date"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.date}
                        />
                        <Col span={6}/>
                    </>

                    }
                    {(state.type === "more-days" || state.type === "more-days-sleep") &&
                    <>
                        <Input
                            span={4}
                            size={"small"}
                            fullWidth
                            label={"Tábor első napja"}
                            required
                            InputLabelProps={{shrink: true}}
                            type="date"
                            name={"first_date"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.first_date}
                        />
                        <Input
                            span={4}
                            size={"small"}
                            fullWidth
                            label={"Tábor utolsó napja"}
                            required
                            InputLabelProps={{shrink: true}}
                            type="date"
                            name={"last_date"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.last_date}
                        />
                        <Col span={4}>
                            <Body marginTop={"smallest"}>Tábor hossza: {campLength ? campLength+1 : 0} nap ({campLength ? campLength : 0} éjszaka)</Body>
                        </Col>
                    </>

                    }
                    {(state.type === "more-days" || state.type === "one-day") &&
                    <>
                        <Input
                            span={4}
                            size={"small"}
                            fullWidth
                            label={"Felnőttek száma"}
                            required
                            InputProps={{
                                endAdornment: <InputAdornment position="end">fő</InputAdornment>,
                            }}
                            type="number"
                            name={"adults_number"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.adults_number}
                        />
                        <Input
                            span={4}
                            size={"small"}
                            fullWidth
                            label={"Gyerekek száma"}
                            required
                            InputProps={{
                                endAdornment: <InputAdornment position="end">fő</InputAdornment>,
                            }}
                            type="number"
                            name={"child_number"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.child_number}
                        />
                        <Col span={4}>
                            <Body marginTop={"smallest"}>Összesen: {peopleNumber ? peopleNumber : 0} fő</Body>
                        </Col>
                    </>
                    }
                    {
                        state.type === "more-days-sleep" &&
                        <>
                            <Col>
                                <Body marginTop={"small"}>Fiú és lány gyerekek száma azért fontos, hogy a szálláson a
                                    fiúk és a
                                    lányok
                                    külön szobákba/jurtákba kerüljenek.</Body>
                            </Col>
                            <Input
                                span={4}
                                size={"small"}
                                fullWidth
                                label={"Felnőttek száma"}
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">fő</InputAdornment>,
                                }}
                                type="number"
                                name={"adults_number"}
                                onChange={(e) => dispatch({
                                    type: "SET_STATE",
                                    value: e.target.value,
                                    name: e.target.name
                                })}
                                value={state.adults_number}
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
                                name={"girls_number"}
                                onChange={(e) => dispatch({
                                    type: "SET_STATE",
                                    value: e.target.value,
                                    name: e.target.name
                                })}
                                value={state.girls_number}
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
                                name={"boys_number"}
                                onChange={(e) => dispatch({
                                    type: "SET_STATE",
                                    value: e.target.value,
                                    name: e.target.name
                                })}
                                value={state.boys_number}
                            />
                            <Col>
                                <Body>Összesen: {peopleNumberSleep ? peopleNumberSleep : 0} fő</Body>
                            </Col>
                        </>
                    }
                    {state.type &&
                    <>
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
                            name={"youngest_child"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.youngest_child}
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
                            name={"oldest_child"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.oldest_child}
                        />
                    </>
                    }
                    {state.type === "more-days-sleep" &&
                    <Col>
                        <Body weight={"bold"} marginTop={"small"}>A szállások pontos egyeztetése telefonon fog
                            megtörténni, a kalkulátor egy átlag árral számol a szálllásért!</Body>
                        <Body>Kérem válassza ki mely szállásokat preferálná :</Body>
                        <FormGroup>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={state.housing.jurta}
                                    name={"jurta"}
                                    onChange={(e) => dispatch({
                                        type: "SET_OBJECT_STATE",
                                        value: e.target.checked,
                                        name: e.target.name,
                                        object: "housing"
                                    })}
                                />
                            } label="Jurta 6x8 fő"/>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={state.housing.paraszthaz}
                                    name={"paraszthaz"}
                                    onChange={(e) => dispatch({
                                        type: "SET_OBJECT_STATE",
                                        value: e.target.checked,
                                        name: e.target.name,
                                        object: "housing"
                                    })}
                                />
                            } label="Parasztház 2x15 fő"/>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={state.housing.apartman}
                                    name={"apartman"}
                                    onChange={(e) => dispatch({
                                        type: "SET_OBJECT_STATE",
                                        value: e.target.checked,
                                        name: e.target.name,
                                        object: "housing"
                                    })}
                                />} label="Apartman 2db 2szobás apartman (szobánlént 2-2 emeletes ágy)"/>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={state.housing.tetoter}
                                    name={"tetoter"}
                                    onChange={(e) => dispatch({
                                        type: "SET_OBJECT_STATE",
                                        value: e.target.checked,
                                        name: e.target.name,
                                        object: "housing"
                                    })}
                                />
                            } label="Tetőtér 23fő"/>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={state.housing.metzger}
                                    name={"metzger"}
                                    onChange={(e) => dispatch({
                                        type: "SET_OBJECT_STATE",
                                        value: e.target.checked,
                                        name: e.target.name,
                                        object: "housing"
                                    })}
                                />} label="Metzger (Alsó 2x10fő) (Felső 10x4fő és 1x8fő)"/>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={state.housing.lovas}
                                    name={"lovas"}
                                    onChange={(e) => dispatch({
                                        type: "SET_OBJECT_STATE",
                                        value: e.target.checked,
                                        name: e.target.name,
                                        object: "housing"
                                    })}
                                />} label="Lovas házak 5fő/ház"/>
                        </FormGroup>
                    </Col>
                    }
                    {state.type &&
                    <>
                        <Col>
                            <Body marginTop={"small"}>Kérem válassza ki milyen étkezéseket kér:</Body>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={state.food.teljes}
                                                                     disabled={state.food.reggeli || state.food.ebed || state.food.vacsora}
                                                                     name={"teljes"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "food"
                                                                     })}/>}
                                                  label="Teljes ellátás (reggeli, ebéd, vacsora)"/>
                                <FormControlLabel control={<Checkbox checked={state.food.reggeli}
                                                                     name={"reggeli"}
                                                                     disabled={state.food.teljes}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "food"
                                                                     })}/>} label="Reggeli"/>
                                <FormControlLabel control={<Checkbox checked={state.food.ebed}
                                                                     name={"ebed"}
                                                                     disabled={state.food.teljes}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "food"
                                                                     })}/>} label="Ebéd"/>
                                <FormControlLabel control={<Checkbox checked={state.food.vacsora}
                                                                     name={"vacsora"}
                                                                     disabled={state.food.teljes}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "food"
                                                                     })}/>} label="Vacsora"/>
                                <FormControlLabel control={<Checkbox checked={state.food.tizoraiuzsonna}
                                                                     name={"tizoraiuzsonna"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "food"
                                                                     })}/>} label="Tízórai és uzsonna"/>
                                <FormControlLabel control={<Checkbox checked={state.food.langallo}
                                                                     name={"langallo"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "food"
                                                                     })}/>}
                                                  label="Kemencés langaló készítése(1 alkalommal)"/>
                                <FormControlLabel control={<Checkbox checked={state.food.tuzrako}
                                                                     name={"tuzrako"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "food"
                                                                     })}/>} label="Fedetlen tűzrakóhely(1 napra)"/>
                            </FormGroup>
                            <Body weight={"bold"} marginTop={"small"}>
                                Ételalergia esetén 20-30%-os felárat számítunk fel
                            </Body>
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
                            value={state.food.intolerants}
                            name={"intolerants"}
                            onChange={(e) => dispatch({
                                type: "SET_OBJECT_STATE",
                                value: e.target.checked,
                                name: e.target.name,
                                object: "food"
                            })}
                        />
                        <Input
                            span={9}
                            size={"small"}
                            fullWidth
                            label={"Ételérzékenységek"}
                            type="text"
                            value={state.food.intolerants_text}
                            name={"intolerants_text"}
                            onChange={(e) => dispatch({
                                type: "SET_OBJECT_STATE",
                                value: e.target.checked,
                                name: e.target.name,
                                object: "food"
                            })}
                        />
                        <Col>
                            <Body marginTop={"small"} weight={"bold"}>Ottalvós tábor esetén ahány
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
                            name={"animator_number"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.animator_number}
                        />
                    </>
                    }
                    {(state.type === "one-day" || state.type === "more-days") &&
                    <>
                        <Col>
                            <Body marginTop={"small"} weight={"bold"}>Medencehasználat</Body>
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
                            name={"pool_number"}
                            onChange={(e) => dispatch({
                                type: "SET_STATE",
                                value: e.target.value,
                                name: e.target.name
                            })}
                            value={state.pool_number}
                        />
                    </>
                    }
                    {state.type &&
                    <>
                        <Col>
                            <Body marginTop={"small"} weight={"bold"}>Aktív és kézműves programjaink kizárólag képzett
                                animátoraink segítségével vehetők igénybe!</Body>
                            <Body>Szolgáltatások menüpont alatt pontosabb leírást kap programjainkról!</Body>

                        </Col>
                        <Col span={6}>
                            <Body>Válasszon aktív játékaink közül:</Body>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={state.active_games.bungee}
                                                                     name={"bungee"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>}
                                                  label="Bungee trambulin (Max. 180 cm és 80 kg )"/>
                                <FormControlLabel control={<Checkbox checked={state.active_games.falmaszas}
                                                                     name={"falmaszas"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>} label="Falmászás (Max. 80 kg)"/>
                                <FormControlLabel control={<Checkbox checked={state.active_games.karika}
                                                                     name={"karika"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>} label="3d karika (150-190 cm-ig)"/>
                                <FormControlLabel control={<Checkbox checked={state.active_games.buborekfoci}
                                                                     name={"buborekfoci"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>} label="Buborékfoci (130cm-től)"/>
                                <FormControlLabel control={<Checkbox checked={state.active_games.lovasproba}
                                                                     name={"lovasproba"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>} label="Lovaspróba"/>
                                <FormControlLabel control={<Checkbox checked={state.active_games.ijaszat}
                                                                     name={"ijaszat"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>} label="Íjászat"/>
                            </FormGroup>
                        </Col>
                        <Col span={6}>
                            <Body>Válasszon kézműves programjaink közül:</Body>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.gyongy}
                                                                     name={"gyongy"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Gyöngyfűzés "/>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.cserep}
                                                                     name={"cserep"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Cserépfestés "/>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.batokilas}
                                                                     name={"batokilas"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Batikolás (pólót nem biztosítunk) "/>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.kavics}
                                                                     name={"kavics"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Kavicsfestés "/>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.ytong}
                                                                     name={"ytong"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Ytong faragás "/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <Body>Válasszon csoportos programjaink közül (animátort nem igényelnek):</Body>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={state.group_program.svab_tajhaz}
                                                                     name={"svab_tajhaz"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "group_program"
                                                                     })}/>} label="Sváb tájház blátogatás (/csoport) "/>
                                <FormControlLabel control={<Checkbox checked={state.group_program.kisallat}
                                                                     name={"kisallat"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "group_program"
                                                                     })}/>} label="Kisállat bemutató (/nap) "/>
                                <FormControlLabel control={<Checkbox checked={state.group_program.pusztakocsi}
                                                                     name={"pusztakocsi"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "group_program"
                                                                     })}/>} label="Pusztakocsizás (/turnus) "/>
                                <FormControlLabel control={<Checkbox checked={state.group_program.suttogo}
                                                                     name={"suttogo"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "group_program"
                                                                     })}/>} label="Suttogó bemutató (/csoport) "/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <Body>Terembérlés:</Body>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={state.teremberles}
                                                                     name={"teremberles"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name
                                                                     })}
                                />} label="Pipáld be, ha szeretnél"/>
                            </FormGroup>
                        </Col>
                        {(state.type === "more-days-sleep") &&
                        <Col>
                            <Body>Összesen: <strong>{priceSleep ? priceSleep : "Nincs elég megadott adat"}</strong> ft</Body>
                        </Col>
                        }
                        {(state.type === "more-days") &&
                        <Col>
                            <Body>Összesen: <strong>{price ? price : "Nincs elég megadott adat"}</strong> ft</Body>
                        </Col>
                        }
                        {(state.type === "one-day") &&
                        <Col>
                            <Body>Összesen: <strong>{priceOne ? priceOne : "Nincs elég megadott adat"}</strong> ft</Body>
                        </Col>
                        }
                    </>}
                    <Col grid justifyContent="center">
                        <ButtonContainer to={"/szervezznalunktaborokat"} variant={"yellow"}>Beküldés</ButtonContainer>
                    </Col>
                </LongForm>
            </Col>
        </SectionLayoutGrid>

    );
};

export default LongFormSection;
