import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/layout/NavBar";
import Home  from "./pages/Home";
import  Resume  from "./pages/Resume";
import Work from "./pages/Work";

export default function App() {
    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>
        </>
    );
}
