import { Box, Container, Stack, Typography } from "@mui/material";
import ProjectCard from "../components/cards/ProjectCard";
import ResearchCard from "../components/cards/ResearchCard";
import { projects } from "../content/projects";
import { research } from "../content/research";

const cardGridStyles = {
    display: "grid",
    gridTemplateColumns: {
        xs: "1fr",
        md: "repeat(2, minmax(0, 1fr))",
    },
    gridTemplateRows: {
        lg: `repeat(${Math.ceil(
            Math.max(research.length, projects.length) / 2,
        )}, minmax(0, 1fr))`,
    },
    flex: 1,
    gap: 4,
    alignItems: "stretch",
    "& > *": {
        width: "100%",
        maxWidth: "none",
    },
};

export default function Work() {
    return (
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, py: 4 }}>
            <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={6}
                sx={{ py: 4, alignItems: "stretch" }}
            >
                <Box
                    component="section"
                    sx={{ display: "flex", flex: 1, minWidth: 0, flexDirection: "column" }}
                >
                    <Typography variant="h3" component="h1" sx={{ mb: 3 }}>
                        Research
                    </Typography>
                    <Box sx={cardGridStyles}>
                        {research.map((paper) => (
                            <ResearchCard key={paper.id} research={paper} />
                        ))}
                    </Box>
                </Box>

                <Box
                    component="section"
                    sx={{ display: "flex", flex: 1, minWidth: 0, flexDirection: "column" }}
                >
                    <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
                        Projects
                    </Typography>
                    <Box sx={cardGridStyles}>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
}
