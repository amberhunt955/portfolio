import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects-section">
      <header className="section-header">
        <h2>My Projects</h2>
        <p>Here are some of the projects I've been working on. Check them out!</p>
      </header>
      <div id="project-display">
        <ProjectCard 
          name="2 Player Maze Game" 
          description="Depth-first search maze utilizing Vanilla JavaScript, HTML, and CSS."
          link="https://amberhunt955.github.io/maze-game/"
          code="https://github.com/amberhunt955/maze-game"
        />
      </div>
    </div>
  );
}

export default Projects;
