import React from "react";
import Button from "@mui/material/Button";

export function CommonButton({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
        >
            {children}
        </Button>
    )
}