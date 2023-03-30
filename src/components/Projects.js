import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects-section">
      <header className="section-header">
        <h2>My Projects</h2>
        <p>Here are some of the projects I've been working on. Check them out!</p>
      </header>
      <div id="project-display">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
