import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#c5c4bf",
            paper: "#292631",
        },
        primary: {
            main: "#0c0247",
        },
        text: {
            primary: "#141414",
            secondary: "#fefeff",
        },
    },

    shape: {
        borderRadius: 14,
    },

    typography: {
        fontFamily: "system-ui, sans-serif",
    },

    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backgroundImage: "none",
                },
            },
        },

        MuiButton: {
            defaultProps: {
                variant: "outlined",
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 999,
                },
            },
        },

        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 999,
                },
            },
        },
    },
});