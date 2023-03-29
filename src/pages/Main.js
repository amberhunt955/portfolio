import Welcome from "./main-components/welcome/Welcome";
import Projects from "./main-components/portfolio/Projects";
import About from "./main-components/About";
import Contact from "./main-components/contact/Contact";

function Main() {
    return (
        <div>
            <Welcome />

            <Projects />

            <About />

            <Contact />
        </div>
    )
}

export default Main;