// import components
import ProjectCard from "../ProjectCard/ProjectCard";

// import images
import eventTracker from "../../assets/images/event-tracker.png"
import menuMagic from "../../assets/images/menu-magic.png"
import codeWithAmber from "../../assets/images/code-with-amber.png"
import ambersLibrary from "../../assets/images/ambers-library.png"

function Projects() {
  return (
    <div id="projects-section">
      <h2 className="section-header">CHECK OUT MY WORK</h2>

      <p id="project-text">Here are some of the projects I've built.</p>

      <div id="project-display">
        <ProjectCard
          name="Code with Amber"
          src={codeWithAmber}
          description="Code with Amber is my professional blog where I combine my programming and writing skills."
          link="https://codewithamber.netlify.app/"
          code="https://github.com/amberhunt955/code-with-amber"
        />

        <ProjectCard
          name="Care Calendar"
          src={eventTracker}
          description="Full stack app tracking the birthdays, anniversaries and special occasions of people you care about most."
          code="https://github.com/amberhunt955/care-calendar"
        />

        <ProjectCard
          name="Maze Duel: Race to the Opposite Corner"
          src="https://user-images.githubusercontent.com/122638466/223304807-bfc8bff4-7b25-4883-a8e1-98b161638638.png"
          description="Two-player desktop game in a depth-first search randomly generated maze."
          link="https://amberhunt955.github.io/maze-game/"
          code="https://github.com/amberhunt955/maze-game"
        />

        <ProjectCard
          name="Amber's Library"
          src={ambersLibrary}
          description="Amber's Library is a simple personal library CRUD app to help users keep track of books read."
          code="https://github.com/amberhunt955/mysql-book-list"
        />

        <ProjectCard
          name="Menu Magic"
          src={menuMagic}
          description="Need to decide on dinner? This project pulls data from an API to generate random recipes."
          link="https://whatsfordinnertoday.netlify.app/"
          code="https://github.com/amberhunt955/vite-recipe-app"
        />
      </div>

    </div>
  );
}

export default Projects;
