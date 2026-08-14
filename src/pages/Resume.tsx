import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import resumePdf from "../assets/resume/SeanMeehanResume.pdf";

export default function Resume() {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                    mb: 3,
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Typography variant="h3" component="h1">
                        Résumé
                    </Typography>
                    <Typography color="text.primary" sx={{ mt: 0.5 }}>
                        Sean Meehan · Applied Mathematics, Data Science, and Software Engineering
                    </Typography>
                </Box>

                <Stack direction="row" spacing={1.5}>
                    <Button
                        component="a"
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open PDF
                    </Button>
                    <Button component="a" href={resumePdf} download>
                        Download
                    </Button>
                </Stack>
            </Stack>

            <Paper
                variant="outlined"
                sx={{
                    overflow: "hidden",
                    bgcolor: "background.paper",
                    boxShadow: 3,
                }}
            >
                <Box
                    component="iframe"
                    src={resumePdf}
                    title="Sean Meehan résumé"
                    sx={{
                        display: "block",
                        width: "100%",
                        height: { xs: "70vh", md: "calc(100vh - 220px)" },
                        minHeight: 600,
                        border: 0,
                    }}
                />
            </Paper>
        </Container>
    );
}
