import { Button } from "@mui/material";

function ProjectCard() {
  return (
    <div className="project-card">
      <h3>Project Title</h3>
      <figure>
        <img alt="project screenshot"/>
        <figcaption></figcaption>
      </figure>
      <Button variant="outlined" size="small" color="success">Link to Project</Button>
      <Button variant="outlined" size="small" color="success">Source Code</Button>
    </div>
  );
}

export default ProjectCard;
