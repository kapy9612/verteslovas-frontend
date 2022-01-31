/*TYPOGRAPHY*/

export const handleTextAlign = textAlign => {
    switch (textAlign) {
        case "left":
            return "left";
        case "center":
            return "center";
        case "right":
            return "right";
        default:
            return "";
    }
};

export const handleMarginBottom = marginBottom => {
    switch (marginBottom) {
        case "smallest":
            return "var(--smallest)";
        case "smaller":
            return "var(--smaller)";
        case "small":
            return "var(--small)";
        case "normal":
            return "var(--normal)";
        case "medium":
            return "var(--medium)";
        case "large":
            return "var(--large)";
        case "larger":
            return "var(--larger)";
        case "largest":
            return "var(--largest)";
        case "huge":
            return "var(--huge)";
        default:
            return "";
    }
};


export const handleFontWeight = weight => {
    switch (weight) {
        case "thin":
            return "var(--thin)";
        case "light":
            return "var(--light)";
        case "bold":
            return "var(--bold)";
        case "black":
            return "var(--black)";
        default:
            return "var(--regular)";
    }
};

export const handleMarginTop = marginTop => {
    switch (marginTop) {
        case "smallest":
            return "var(--smallest)";
        case "smaller":
            return "var(--smaller)";
        case "small":
            return "var(--small)";
        case "normal":
            return "var(--normal)";
        case "medium":
            return "var(--medium)";
        case "large":
            return "var(--large)";
        case "larger":
            return "var(--larger)";
        case "largest":
            return "var(--largest)";
        case "huge":
            return "var(--huge)";
        default:
            return "";
    }
};

export const handleColor = color => {
    return "var(--" + color + ")"
};

/*LAYOUT*/

export const handleGridColumn = gridColumn => {
    switch (gridColumn) {
        case 1:
            return "span 1";
        case 2:
            return "span 2";
        case 3:
            return "span 3";
        case 4:
            return "span 4";
        case 5:
            return "span 5";
        case 6:
            return "span 6";
        case 7:
            return "span 7";
        case 8:
            return "span 8";
        case 9:
            return "span 9";
        case 10:
            return "span 10";
        case 11:
            return "span 11";
        default:
            return "1/-1";
    }
};

export const handleLayoutPadding = padding => {
    switch (padding) {
        case "noTop":
            return "0 0 10vh 0";
        case "noBottom":
            return "10vh 0 0 0";
        case "firstElement":
            return "16vh 0 10vh 0";
        default:
            return "10vh 0 10vh 0";
    }
};

export const handleLayoutMinHeight = mh => {
    switch (mh) {
        case "large":
            return "100vh";
        default:
            return "60vh";
    }
};

export const handleGridGap = gridGap => {
    switch (gridGap) {
        case "small":
            return "1.5rem 1.5rem";
        case "smallest":
            return "0.5rem 1.5rem";
        default:
            return "3rem 1.5rem";
    }
};

export const handleLayoutBackground = bg => {
    switch (bg) {
        case "none":
            return "unset";
        case "wedding":
            return "var(--wedding-background)";
        case "whitesmoke":
            return "var(--whitesmoke-background)";
        default:
            return "var(--grey-background)";
    }
};

export const handleAlignContent = ac => {
    switch (ac) {
        case "start":
            return "start";
        case "center":
            return "center";
        case "end":
            return "end";
        case "stretch":
            return "stretch";
        default:
            return "";
    }
};

export const handleJustifyContent = jc => {
    switch (jc) {
        case "center":
            return "center";
        case "end":
            return "end";
        case "stretch":
            return "stretch";
        default:
            return "start";
    }
};

/*BUTTON*/

export const handleButtonColor = type => {
    switch (type) {
        case "primary":
            return "var(--yellow)";
        case "secondary":
            return "var(--light-beige)";
        default:
            return "";
    }
};

export const handleButtonHover = type => {
    switch (type) {
        case "primary":
            return "red";
        case "secondary":
            return "green";
        default:
            return "";
    }
};