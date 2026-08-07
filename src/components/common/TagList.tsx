import { Box, Chip } from "@mui/material";

type TagListProps = {
    tags: string[];
};

export function TagList({ tags }: TagListProps) {
    return (
        <Box 
        sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
        color="text.primary"
        >
            {tags.map((tag) => (
                <Chip sx={{bgcolor: "background.default"}} key={tag} label={tag} />
            ))}
        </Box>
    );
}