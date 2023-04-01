
import { Button } from "@mui/material";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.name}</h3>

      <p>{props.description}</p>

      <Button 
        variant="outlined" 
        size="small" 
        href={props.link} 
        target="_blank" 
        rel="noreferrer"
      >Link to Project</Button>

      <Button 
        variant="outlined" 
        size="small" 
        href={props.code} 
        target="_blank" 
        rel="noreferrer"
      >Source Code</Button>
    </div>
  );
}

export default ProjectCard;
