import { BAND_NAME } from "./content";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <main>
                <About />
                <Gallery />
                <Contact />
            </main>
            <footer>© {new Date().getFullYear()} {BAND_NAME}</footer>
        </>
    );
}

export default App;
