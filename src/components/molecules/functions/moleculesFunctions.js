export const handleMainCardColor = color => {
    switch (color) {
        case "beige":
            return "var(--light-beige)";
        case "grey":
            return "var(--light-grey)";
        case "yellow":
            return "var(--yellow-table)";
        case "green":
            return "var(--green-camp)";
        default:
            return "var(--light-beige)";
    }
};
export const handleFormBGColor = color => {
    switch (color) {
        case "grey":
            return "var(--light-grey)";
        case "brown":
            return "var(--light-brown-form)";

        default:
            return "var(--light-brown-form)";
    }
};
export const handleButtonCardBG = color => {
    switch (color) {
        case "grey":
            return "var(--light-grey)";
        case "white":
            return "white";

        default:
            return "";
    }
};