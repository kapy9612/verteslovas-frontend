export const handleMainCardColor = color => {
    switch (color) {
        case "beige":
            return "var(--light-beige)";
        case "grey":
            return "var(--light-grey)";
        case "yellow":
            return "var(--yellow-card)";
        case "green":
            return "var(--green-camp)";
        default:
            return "var(--light-beige)";
    }
};