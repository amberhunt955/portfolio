import { Button } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.name}</h3>

      <img className="project-photo" src={props.src} alt={props.name} width="250px" height="150px" />

      <p>{props.description}</p>

      <div className="project-buttons">
        <Button variant="outlined" size="small" href={props.link} target="_blank" rel="noreferrer" endIcon={<OpenInNew />}>
          View Project
        </Button>

        <Button variant="outlined" size="small" href={props.code} target="_blank" rel="noreferrer" endIcon={<OpenInNew />}>
          Source Code
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
