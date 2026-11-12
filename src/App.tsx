import { BAND_NAME } from "./content";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Repertoire from "./components/Repertoire";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
    return (
        <>
            <Hero />
            <main>
                <About />
                <Gallery />
                <Repertoire />
                <Contact />
            </main>
            <footer>© {new Date().getFullYear()} {BAND_NAME}</footer>
        </>
    );
}

export default App;
