import ProjectCard from "../ProjectCard";
import ProjectDownArrow from "../navigation/ProjectDownArrow";

function Projects() {
  return (
    <div id="projects-section">
      <header className="section-header">
        <h2>CHECK OUT MY WORK</h2>
        <p>Explore some of my recent projects and discover how I'm evolving my skills as a web developer.</p>
      </header>

      <div id="project-display">
        <ProjectCard 
          name="Maze Duel: Race to the Opposite Corner" 
          src="https://user-images.githubusercontent.com/122638466/223304807-bfc8bff4-7b25-4883-a8e1-98b161638638.png"
          description="Two-player desktop game in a depth-first search randomly generated maze. Technologies: Vanilla JavaScript, HTML, and CSS."
          link="https://amberhunt955.github.io/maze-game/"
          code="https://github.com/amberhunt955/maze-game"
        />
      </div>
      <ProjectDownArrow id="project-down"/>
    </div>
  );
}

export default Projects;
