import { useEffect } from "react";

import Welcome from "../components/Sections/Welcome";
import Projects from "../components/Sections/Projects";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";

function Main() {
    useEffect(() => {
        window.scrollTo(0,0);
      }, []);
      
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