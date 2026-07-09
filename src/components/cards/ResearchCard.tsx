import type { Research } from "../../types/portfolio";
import { TagList } from "../common/TagList";
import { LinkList } from "../common/LinkList";
import { Card, CardMedia, CardContent, Typography, Stack} from "@mui/material";

type ResearchCardProps = {
    research: Research;
};

export default function ResearchCard({ research }: ResearchCardProps) {
    return (
        <Card
            sx={{
                maxWidth:450,
                p: 2,
                transition: "0.2s",
                color: "text.primary",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 8,
                    borderColor: "primary.main",
                },
                bgcolor: "background.paper",
            }}
            variant="outlined"
        >
            <CardMedia />
            <CardContent>
                <Typography variant="h5">{research.title}</Typography>
                <Typography variant="body2">{research.summary}</Typography>
                <Stack direction="row" spacing={1} sx={{mt: 1}}>
                    <Typography variant="body1" sx={{fontWeight: "bold"}}>Technologies:</Typography>
                    <TagList tags={research.technologies} />
                </Stack>
                <LinkList links={research.links} />
            </CardContent>
        </Card>
    );
}