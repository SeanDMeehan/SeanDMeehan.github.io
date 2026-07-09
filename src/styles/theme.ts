import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#0f172a",
            paper: "#111827",
        },
        primary: {
            main: "#38bdf8",
        },
        text: {
            primary: "#e5e7eb",
            secondary: "#9ca3af",
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