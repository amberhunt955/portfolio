import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div className="projects-section">
          <h1>Project Section</h1>
          <p>Here are some of the projects I've been working on.</p>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      )
}

export default Projects;