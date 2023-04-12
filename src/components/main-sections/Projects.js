import ProjectCard from "../ProjectCard";
import DownArrow from "../navigation/DownArrow";

import spaceBattle from "../../assets/images/space-battle.jpg"

function Projects() {
  return (
    <div id="projects-section">
      <h2 className="section-header">CHECK OUT MY WORK</h2>

      <p id="project-text">Explore some of my recent projects and discover how I'm evolving my skills as a web developer.</p>

      <div id="project-display">
        <ProjectCard
          name="Maze Duel: Race to the Opposite Corner"
          src="https://user-images.githubusercontent.com/122638466/223304807-bfc8bff4-7b25-4883-a8e1-98b161638638.png"
          description="Two-player desktop game in a depth-first search randomly generated maze. Technologies: Vanilla JavaScript, HTML, and CSS."
          link="https://amberhunt955.github.io/maze-game/"
          code="https://github.com/amberhunt955/maze-game"
        />
        <ProjectCard
          name="Space Battle"
          src={spaceBattle}
          description="DOM Manipulation user vs computer luck based game. Very simple styling at the moment. Technologies: Vanilla JavaScript, HTML, and CSS."
          link="https://amberhunt955.github.io/space-battle/"
          code="https://github.com/amberhunt955/space-battle"
        />
      </div>
      
      <DownArrow nextSection="about-section" />
    </div>
  );
}

export default Projects;
