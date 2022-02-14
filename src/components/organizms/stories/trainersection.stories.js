import React from "react";
import TrainerSection from "../trainer-section/TrainerSection";
import image from "./dummy/trainer_dummy.jpg"

export default {
    title: 'Organisms/Trainers Section',
    args: {
        trainers: [
            {
                name: "Pálfi Rebeka",
                title: "Lovasedző",
                phone: "Telefonszám: 06-20/321-0622",
                image: image,
                description: "Pálfi Rebeka vagyok, lovassport edzői végzettséggel rendelkezem. Gondolataim nagy része 5 éves korom óta a lovak körül forog-ekkor költözött a családom vidékre. Abban a szerencsében volt részem, hogy falunkban tenyészet működött, akadtak még emberek, akik földjeiket lovakkal művelték, így belekóstolhattam a lovazásba, amiből hamar szerelem lett. Később több lovardában megfordultam, majd 14 évesen megkaptam életem első és meghatározó lovát, Karimot. A kis shagya herélt rengeteg tudást adott nekem, neki köszönhetően döntöttem úgy, hogy lovak között szeretnék dolgozni a későbbiekben. 2016-ban felvételt nyertem a Kaposvári Egyetem (ma már MATE) Lótenyésztő-és lovassportszervező agrármérnöki szakára, ahol volt lehetőségem a lovaglás számos szakágába betekintést nyerni, szaktekintélyektől órát venni. Egyetemi éveim alatt rendszeresen jártam ki csoporttársaimmal Belgiumba, ahol profi díjugató versenyek lebonyolítását tettük gördülékenyebbé. 2020-ban szereztem sportedzői bizonyítványom.  Úgy hiszem, hogy a „lovazást” az ember egy életen át tanulja, mindig van hova fejlődni, mindig van min csiszolni. Ennek megfelelően igyekszem tovább képezni magam.Szeretettel várok minden tanulni vágyót, legyen gyerek vagy felnőtt, a lovaglás és maga a ló közelsége rengeteg élményt rejt magában minden korcsoport számára. Fontosnak tartom, hogy a gyerekeknek ne csak maga a lovaglás, hanem a ló körül elvégzendő feladatok, maga az állat ismerete is motivációt jelentsen, hiszen mindez rengeteg jótékony hatással bír a fegyelemre, mozgáskoordinációra, kitartásra, nem utolsó sorban pedig a virtuális életet hátrahagyva megérkeznek a valóságba."

            },
        ]
    }
};

export const trainerSection = ({...args}) => {
    return (
        <TrainerSection {...args} />
    );
}