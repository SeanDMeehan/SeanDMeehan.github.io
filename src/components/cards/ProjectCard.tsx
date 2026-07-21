import type { Project } from "../../types/portfolio";
import { TagList } from "../common/TagList";
import { LinkList } from "../common/LinkList";
import { Card, CardMedia, CardContent, Typography, Stack, Box } from "@mui/material";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card
            sx={{
                maxWidth:450,
                p: 2,
                transition: "0.2s",
                color: "text.secondary",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 8,
                    borderColor: "primary.main",
                },
                bgcolor: "background.paper",
            }}
            variant="outlined"
        >
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                >
                </CardMedia>
                <Typography variant="h5">{project.title}</Typography>
            </Box>
                <CardContent>
                    <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
                        <Typography 
                            variant="body2"
                            sx={{marginLeft:"auto", textAlign: "left"}}
                        >{project.summary}</Typography>
                    </Box>
                    <Box>
                        <Stack direction="row" spacing={1} sx={{mt: 1}}>
                            <Typography variant="body1" sx={{fontWeight: "bold"}}>Technologies:</Typography>
                            <TagList tags={project.technologies} />
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{mt: 1}}>
                            <Typography variant="body1" sx={{fontWeight: "bold"}}>Link(s):</Typography>
                            <LinkList links={project.links} />
                        </Stack>
                    </Box>
                </CardContent>
        </Card>
    );
}