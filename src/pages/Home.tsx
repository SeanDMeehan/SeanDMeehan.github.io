import { projects } from "../content/projects";
import ProjectCard  from "../components/cards/ProjectCard";
import { research } from "../content/research";
import  ResearchCard  from "../components/cards/ResearchCard";
import { Box, Stack, Typography } from "@mui/material";

export default function Home() {
    return (
        <>
            <Typography variant="h1">Sean Meehan</Typography>
        <Box>
            <Typography variant="h2">About</Typography>
            <Typography>I am a masters student in applied mathematics at Tulane University.</Typography>
        </Box>
        <Box>
            <Typography variant="h2">Contact</Typography>
            <Typography>sean@themeehans.net</Typography>
        </Box>
        <Box>
            <Typography variant="h2">Featured Work</Typography>
            <Box
                sx={{
                    width: "fit-content",
                    mx: "auto",
                    px: 3,
                    py: 4,
                }}
            >
                <Stack 
                    direction="row"
                    spacing={2}  
                >
                    <ProjectCard
                        key={projects[0].id}
                        project={projects[0]}
                    />
                    <ResearchCard
                        key={research[0].id}
                        research={research[0]}
                    />
                </Stack>
            </Box>
                
        </Box>
        <Box>
            <Typography variant="h2">Technologies</Typography>
            <Typography>Python</Typography>
        </Box>
        </>
    )
}
