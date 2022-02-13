import React from "react";

import SimpleTableSection from "../table-section/SimpleTableSection";

export default {
    title: 'Organisms/Table Sections/Simple Table Section',
    args: {
        title: "Étkezés",
        isYellow: false,
        header: {
            firstColumn: "Termek",
            secondColumn: "Árak"
        },
        rows: [
            {
                firstColumn: "Kemencés",
                secondColumn: "50000Ft/nap"
            },
            {
                firstColumn: "Kemencés",
                secondColumn: "50000Ft/nap"
            },
            {
                firstColumn: "Kemencés",
                secondColumn: "50000Ft/nap"
            },
            {
                firstColumn: "Kemencés",
                secondColumn: "50000Ft/nap"
            },
            {
                firstColumn: "Kemencés",
                secondColumn: "50000Ft/nap"
            },
        ]
    }
};

export const simpleTableSection = ({...args}) => {
    return (
        <SimpleTableSection {...args}/>
    );
};
