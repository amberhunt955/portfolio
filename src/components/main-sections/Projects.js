// import components
import ProjectCard from "../ProjectCard";

// import images
import eventTracker from "../../assets/images/event-tracker.png"
import menuMagic from "../../assets/images/menu-magic.png"

function Projects() {
  return (
    <div id="projects-section">
      <h2 className="section-header">CHECK OUT MY WORK</h2>

      <p id="project-text">Explore some of my recent projects and discover how I'm evolving my skills as a web developer.</p>

      <div id="project-display">
      <ProjectCard
          name="Care Calendar"
          src={eventTracker}
          description="Full stack app tracking the birthdays, anniversaries and special occasions of people you care about most. Technologies: MongoDB, Express, React, Node."
          code="https://github.com/amberhunt955/care-calendar"
        />

        <ProjectCard
          name="Maze Duel: Race to the Opposite Corner"
          src="https://user-images.githubusercontent.com/122638466/223304807-bfc8bff4-7b25-4883-a8e1-98b161638638.png"
          description="Two-player desktop game in a depth-first search randomly generated maze. Technologies: Vanilla JavaScript, HTML, and CSS."
          link="https://amberhunt955.github.io/maze-game/"
          code="https://github.com/amberhunt955/maze-game"
        />

        <ProjectCard
          name="Menu Magic"
          src={menuMagic}
          description="A simple project that pulls data from an API to generate random recipes. Technologies: React, CSS, Vite."
          link="https://whatsfordinnertoday.netlify.app/"
          code="https://github.com/amberhunt955/vite-recipe-app"
        />
      </div>

    </div>
  );
}

export default Projects;
