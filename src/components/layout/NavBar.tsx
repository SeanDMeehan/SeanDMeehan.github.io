import { NavLink } from "react-router-dom";
import { CommonButton } from "../common/CommonButton";
import { AppBar, Box, Toolbar } from "@mui/material";

const navItems = [
    { label: "Home", path: "/" },
    { label: "Research", path: "/research" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
];


export function NavBar() {
    return (
        <AppBar position="sticky" color="transparent">
            <Toolbar>
                <Box sx={{ display: "flex", gap: 1, mx: "auto" }}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                        >
                            <CommonButton
                                onClick={() => {}}
                                children={item.label}
                            >
                            </CommonButton>
                        </NavLink>
                        
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}