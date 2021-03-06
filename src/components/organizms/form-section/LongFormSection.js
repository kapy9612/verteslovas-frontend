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
//kell egy megjegyzes mez?? a v??g??re
    return (
        <SectionLayoutGrid background={"brown"} customPadding={"firstElement"}>
            <Col>
                <Title sand={true} textAlign={"center"} marginBottom={"small"} weight={"bold"}>Aj??nlatk??r??s</Title>
                <Body textAlign={"center"} weight={"bold"}>
                    ??ll??tsa ??ssze t??bor??t ??s n??zze meg, hogy kb. mennyibe ker??lne.
                </Body>
                <Body textAlign={"center"} marginBottom={"small"} weight={"bold"}>
                    (Az ??r csak t??j??koztat?? jelleg??)
                </Body>
            </Col>
            <Col>
                <LongForm>
                    <Input
                        span={4}
                        size={"small"}
                        fullWidth
                        label={"Szervez?? neve:"}
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
                        label={"Telefonsz??m:"}
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
                        <InputLabel id="package-label">V??lassza ki hogy milyen t??bort szeretne szervezni:</InputLabel>
                        <Select
                            native
                            label="V??lassza ki hogy milyen t??bort szeretne szervezni:"
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
                            <option value="more-days">Napk??zis (t??bb napos t??bor, minden nap hazamenetellel)</option>
                            <option value="more-days-sleep">T??bb nap ottalv??ssal</option>
                        </Select>
                    </SelectControl>
                    {state.type === "one-day" &&
                    <>
                        <Input
                            span={4}
                            size={"small"}
                            fullWidth
                            label={"T??bor id??pontja"}
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
                            label={"T??bor els?? napja"}
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
                            label={"T??bor utols?? napja"}
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
                            <Body marginTop={"smallest"}>T??bor hossza: {campLength ? campLength+1 : 0} nap ({campLength ? campLength : 0} ??jszaka)</Body>
                        </Col>
                    </>

                    }
                    {(state.type === "more-days" || state.type === "one-day") &&
                    <>
                        <Input
                            span={4}
                            size={"small"}
                            fullWidth
                            label={"Feln??ttek sz??ma"}
                            required
                            InputProps={{
                                endAdornment: <InputAdornment position="end">f??</InputAdornment>,
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
                            label={"Gyerekek sz??ma"}
                            required
                            InputProps={{
                                endAdornment: <InputAdornment position="end">f??</InputAdornment>,
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
                            <Body marginTop={"smallest"}>??sszesen: {peopleNumber ? peopleNumber : 0} f??</Body>
                        </Col>
                    </>
                    }
                    {
                        state.type === "more-days-sleep" &&
                        <>
                            <Col>
                                <Body marginTop={"small"}>Fi?? ??s l??ny gyerekek sz??ma az??rt fontos, hogy a sz??ll??son a
                                    fi??k ??s a
                                    l??nyok
                                    k??l??n szob??kba/jurt??kba ker??ljenek.</Body>
                            </Col>
                            <Input
                                span={4}
                                size={"small"}
                                fullWidth
                                label={"Feln??ttek sz??ma"}
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">f??</InputAdornment>,
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
                                label={"L??ny gyerekek sz??ma"}
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">f??</InputAdornment>,
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
                                label={"Fi?? gyerekek sz??ma"}
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">f??</InputAdornment>,
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
                                <Body>??sszesen: {peopleNumberSleep ? peopleNumberSleep : 0} f??</Body>
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
                                endAdornment: <InputAdornment position="end">??v</InputAdornment>,
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
                            label={"Legid??sebb gyerek"}
                            required
                            InputProps={{
                                endAdornment: <InputAdornment position="end">??v</InputAdornment>,
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
                        <Body weight={"bold"} marginTop={"small"}>A sz??ll??sok pontos egyeztet??se telefonon fog
                            megt??rt??nni, a kalkul??tor egy ??tlag ??rral sz??mol a sz??lll??s??rt!</Body>
                        <Body>K??rem v??lassza ki mely sz??ll??sokat prefer??ln?? :</Body>
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
                            } label="Jurta 6x8 f??"/>
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
                            } label="Paraszth??z 2x15 f??"/>
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
                                />} label="Apartman 2db 2szob??s apartman (szob??nl??nt 2-2 emeletes ??gy)"/>
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
                            } label="Tet??t??r 23f??"/>
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
                                />} label="Metzger (Als?? 2x10f??) (Fels?? 10x4f?? ??s 1x8f??)"/>
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
                                />} label="Lovas h??zak 5f??/h??z"/>
                        </FormGroup>
                    </Col>
                    }
                    {state.type &&
                    <>
                        <Col>
                            <Body marginTop={"small"}>K??rem v??lassza ki milyen ??tkez??seket k??r:</Body>
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
                                                  label="Teljes ell??t??s (reggeli, eb??d, vacsora)"/>
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
                                                                     })}/>} label="Eb??d"/>
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
                                                                     })}/>} label="T??z??rai ??s uzsonna"/>
                                <FormControlLabel control={<Checkbox checked={state.food.langallo}
                                                                     name={"langallo"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "food"
                                                                     })}/>}
                                                  label="Kemenc??s langal?? k??sz??t??se(1 alkalommal)"/>
                                <FormControlLabel control={<Checkbox checked={state.food.tuzrako}
                                                                     name={"tuzrako"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "food"
                                                                     })}/>} label="Fedetlen t??zrak??hely(1 napra)"/>
                            </FormGroup>
                            <Body weight={"bold"} marginTop={"small"}>
                                ??telalergia eset??n 20-30%-os fel??rat sz??m??tunk fel
                            </Body>
                        </Col>
                        <Input
                            span={3}
                            size={"small"}
                            fullWidth
                            label={"??tel??rz??kenyek sz??ma"}
                            required
                            InputLabelProps={{shrink: true}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">f??</InputAdornment>,
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
                            label={"??tel??rz??kenys??gek"}
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
                            <Body marginTop={"small"} weight={"bold"}>Ottalv??s t??bor eset??n ah??ny
                                anim??tort k??rnek a csoport mell??, annyi feln??tt teljes all??t??sa ??s sz??ll??sa ingyen
                                van!</Body>
                            <Body>
                                Az anim??tor vezeti ??s koordin??lja a programokat, fel??gyel a biztons??gra, ig??ny eset??n a
                                csapattal ??jszak??zik.(18 f??nk??nt 1 anim??tor aj??nlott)
                            </Body>
                        </Col>
                        <Input
                            span={3}
                            size={"small"}
                            fullWidth
                            label={"Anim??torok sz??ma"}
                            required
                            InputLabelProps={{shrink: true}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">f??</InputAdornment>,
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
                            <Body marginTop={"small"} weight={"bold"}>Medencehaszn??lat</Body>
                        </Col>
                        <Input
                            span={3}
                            size={"small"}
                            fullWidth
                            required
                            InputLabelProps={{shrink: true}}
                            label={"Emberek sz??ma"}
                            type="number"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">f??</InputAdornment>,
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
                            <Body marginTop={"small"} weight={"bold"}>Akt??v ??s k??zm??ves programjaink kiz??r??lag k??pzett
                                anim??toraink seg??ts??g??vel vehet??k ig??nybe!</Body>
                            <Body>Szolg??ltat??sok men??pont alatt pontosabb le??r??st kap programjainkr??l!</Body>

                        </Col>
                        <Col span={6}>
                            <Body>V??lasszon akt??v j??t??kaink k??z??l:</Body>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={state.active_games.bungee}
                                                                     name={"bungee"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>}
                                                  label="Bungee trambulin (Max. 180 cm ??s 80 kg )"/>
                                <FormControlLabel control={<Checkbox checked={state.active_games.falmaszas}
                                                                     name={"falmaszas"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>} label="Falm??sz??s (Max. 80 kg)"/>
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
                                                                     })}/>} label="Bubor??kfoci (130cm-t??l)"/>
                                <FormControlLabel control={<Checkbox checked={state.active_games.lovasproba}
                                                                     name={"lovasproba"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>} label="Lovaspr??ba"/>
                                <FormControlLabel control={<Checkbox checked={state.active_games.ijaszat}
                                                                     name={"ijaszat"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "active_games"
                                                                     })}/>} label="??j??szat"/>
                            </FormGroup>
                        </Col>
                        <Col span={6}>
                            <Body>V??lasszon k??zm??ves programjaink k??z??l:</Body>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.gyongy}
                                                                     name={"gyongy"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Gy??ngyf??z??s "/>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.cserep}
                                                                     name={"cserep"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Cser??pfest??s "/>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.batokilas}
                                                                     name={"batokilas"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Batikol??s (p??l??t nem biztos??tunk) "/>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.kavics}
                                                                     name={"kavics"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Kavicsfest??s "/>
                                <FormControlLabel control={<Checkbox checked={state.craftsman.ytong}
                                                                     name={"ytong"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "craftsman"
                                                                     })}/>} label="Ytong farag??s "/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <Body>V??lasszon csoportos programjaink k??z??l (anim??tort nem ig??nyelnek):</Body>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={state.group_program.svab_tajhaz}
                                                                     name={"svab_tajhaz"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "group_program"
                                                                     })}/>} label="Sv??b t??jh??z bl??togat??s (/csoport) "/>
                                <FormControlLabel control={<Checkbox checked={state.group_program.kisallat}
                                                                     name={"kisallat"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "group_program"
                                                                     })}/>} label="Kis??llat bemutat?? (/nap) "/>
                                <FormControlLabel control={<Checkbox checked={state.group_program.pusztakocsi}
                                                                     name={"pusztakocsi"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "group_program"
                                                                     })}/>} label="Pusztakocsiz??s (/turnus) "/>
                                <FormControlLabel control={<Checkbox checked={state.group_program.suttogo}
                                                                     name={"suttogo"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_OBJECT_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name,
                                                                         object: "group_program"
                                                                     })}/>} label="Suttog?? bemutat?? (/csoport) "/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <Body>Teremb??rl??s:</Body>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={state.teremberles}
                                                                     name={"teremberles"}
                                                                     onChange={(e) => dispatch({
                                                                         type: "SET_STATE",
                                                                         value: e.target.checked,
                                                                         name: e.target.name
                                                                     })}
                                />} label="Pip??ld be, ha szeretn??l"/>
                            </FormGroup>
                        </Col>
                        {(state.type === "more-days-sleep") &&
                        <Col>
                            <Body>??sszesen: <strong>{priceSleep ? priceSleep : "Nincs el??g megadott adat"}</strong> ft</Body>
                        </Col>
                        }
                        {(state.type === "more-days") &&
                        <Col>
                            <Body>??sszesen: <strong>{price ? price : "Nincs el??g megadott adat"}</strong> ft</Body>
                        </Col>
                        }
                        {(state.type === "one-day") &&
                        <Col>
                            <Body>??sszesen: <strong>{priceOne ? priceOne : "Nincs el??g megadott adat"}</strong> ft</Body>
                        </Col>
                        }
                    </>}
                    <Col grid justifyContent="center">
                        <ButtonContainer to={"/szervezznalunktaborokat"} variant={"yellow"}>Bek??ld??s</ButtonContainer>
                    </Col>
                </LongForm>
            </Col>
        </SectionLayoutGrid>

    );
};

export default LongFormSection;
