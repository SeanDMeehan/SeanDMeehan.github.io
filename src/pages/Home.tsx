import { projects } from "../content/projects";
import ProjectCard  from "../components/cards/ProjectCard";
import { research } from "../content/research";
import  ResearchCard  from "../components/cards/ResearchCard";
import { Box, CardMedia, Chip, Container, Divider, Link, Stack, Typography } from "@mui/material";

export default function Home() {

    const getTechnologies = () => {
        const techList: string[] = [];
        projects.forEach(project => {
            project.technologies.forEach(tech => {
                if (!techList.includes(tech)) {
                    techList.push(tech);
                }
            });
        });
        research.forEach(research => {
            research.technologies.forEach(tech => {
                if (!techList.includes(tech)) {
                    techList.push(tech);
                }
            });
        });
        const techSet = new Set(techList);
        return techSet;
    }

    const getTechnicalInterests = () => {
        const techIntList: string[] = [];
        research.forEach(research => {
            research.techniques.forEach(tech => {
                if (!techIntList.includes(tech)) {
                    techIntList.push(tech);
                }
            });
        });
        const techIntSet = new Set(techIntList);
        return techIntSet;
    }

    return (
        <Container 
            sx={{
                width: "100%",
                py:{ xs:2,md:4}
            }}
        >
            <Stack
                spacing={2}
            >
                <Box
                    component="section"
                    sx={{
                    //border: "1px solid #ccc"
                    }}
                >    
                    <Stack
                        direction="row"
                        sx={{justifyContent: "space-between"}}
                    >
                        <Stack 
                            direction="column"
                        >
                            <Typography variant="h1">Sean Meehan</Typography>
                            <Stack
                                spacing={1}
                                sx={{mt: 1}}
                            >
                                <Typography variant="h5">MS Applied Mathematics, Tulane University</Typography>
                                <Typography variant="h5">BS Mathematics, Samford University</Typography>
                                <Typography variant="h5">Applied Mathematician</Typography>
                                <Typography variant="h5">Data Scientist</Typography>
                                <Typography variant="h5">Software Engineer</Typography>
                            </Stack>
                        </Stack>
                        <CardMedia
                            sx={{maxWidth: 500}}
                            component="img"
                            image={"/src/content/images/seanMeehan.png"}
                            alt={"/src/content/images/seanMeehan.png"}
                        >
                        </CardMedia>
                    </Stack>

                </Box>
                <Divider sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}></Divider>
                <Box>
                    <Typography variant="h2">Featured Work</Typography>
                    <Box
                        sx={{
                            width: "100%",
                            mx: "auto",
                            px: 3,
                            py: 4,
                        }}
                    >
                        <Stack 
                            direction={{ xs: "column", md: "row" }}
                            spacing={2}  
                        >
                            {research.filter((r) => r.featured).map((r)=> (
                                <ResearchCard
                                    key={r.id}
                                    research={r}
                                />
                            ))}
                            {projects.filter((p)=>p.featured).map((p)=>
                                <ProjectCard
                                    key={p.id}
                                    project={p}
                                />
                            )}
                        </Stack>
                    </Box>
                        
                </Box>
                <Divider sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}></Divider>
                <Box>
                    <Typography variant="h2">About</Typography>
                    <Typography>
                        I am a master's student in applied mathematics at Tulane University with interests in machine learning, data science, and software engineering. I enjoy understanding how things work, whether that means reading research papers, implementing algorithms from scratch, or building software around ideas that I find interesting. Outside of mathematics and programming, I enjoy reading, writing, chess, soccer, and an occasional game of DnD.
                    </Typography>
                </Box>
                <Box
                    sx={{ flex:1}}
                >
                    <Typography variant="h2">Technologies</Typography>
                    <Stack
                        direction="row"
                        sx={{ mt: 1,
                            flexWrap: "wrap"
                         }}
                    >
                        {Array.from(getTechnologies()).map((tech, index) => (
                            <Chip key={index} label={tech} sx={{ mr: 1, mb: 1 }} />
                        ))}
                    </Stack>
                </Box>
                <Box>
                    <Typography variant="h2">Technical Interests</Typography>
                    <Stack
                        direction="row"
                        sx={{ mt:1,
                            flexWrap: "wrap"
                         }}
                    >
                        {Array.from(getTechnicalInterests()).map((tech, index) => (
                            <Chip key={index} label={tech} sx={{ mr: 1, mb: 1 }} />
                        ))}
                    </Stack>
                </Box>
                <Divider sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}></Divider>
                <Box>
                    <Typography variant="h2">Contact</Typography>
                    <Typography>New Orleans, Louisianna</Typography> 
                    <Typography>
                        <Link href="mailto:sean@themeehans.net">sean@themeehans.net</Link>
                    </Typography>
                    <Typography>
                        GitHub:{" "}
                        <Link
                            href="https://github.com/SeanDMeehan"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/SeanDMeehan
                        </Link>
                    </Typography>
                    <Typography>
                        LinkedIn:{" "}
                        <Link
                            href="https://www.linkedin.com/in/sean-meehan-0a5053266"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.linkedin.com/in/sean-meehan-0a5053266
                        </Link>
                    </Typography>
                </Box>
            </Stack>
        </Container>
    )
}
