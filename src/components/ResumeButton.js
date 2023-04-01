import { Button } from "@mui/material";
import resume from "../assets/AmberHuntResume.pdf"

function ResumeButton() {
    return <Button variant="contained" href={resume} download={resume}>Download Resume</Button>
}

export default ResumeButton;