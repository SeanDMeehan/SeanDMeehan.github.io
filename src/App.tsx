import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/layout/NavBar";
import Home  from "./pages/Home";
import  Research  from "./pages/Research";
import Projects  from "./pages/Projects";
import  Resume  from "./pages/Resume";

export default function App() {
    return (
        <>
            <NavBar />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>
        </>
    );
}
