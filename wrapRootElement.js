import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import {createTheme} from "@mui/material";

export const vertesTheme = createTheme({
    palette: {
        primary: {
            main: "#F4BE18",
            dark: "#052120",
        },
        secondary:{
            main: "#052120",
            dark: "#052120",
        },
        error:{
            main: "#FD8F82",
        }
    },
    status: {
        error: "#FD8F82",
        disabled: "#697281"
    },
    typography: {
        root: {
            fontFamily: "Lato, sans-serif",
            fontSize: "1rem"
        }
    }
})

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={vertesTheme}>
            {element}
        </ThemeProvider>
    )
}
