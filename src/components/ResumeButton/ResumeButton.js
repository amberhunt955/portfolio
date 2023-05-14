import resume from "../../assets/AmberHuntResume.pdf";

// styling
import styles from "./ResumeButton.module.css"
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

function ResumeButton() {
  return (
    <Button
      id="resume-button"
      className={`mui-button ${styles.ResumeButton}`}
      variant="contained"
      sx={{ background: "#080B13ff", color: "#DBEBFBff" }}
      disableElevation
      href={resume}
      download={resume}
      endIcon={<Download fontSize="calc(1vw + 1vh)" />}
    >
      My Resume
    </Button>
  );
}

export default ResumeButton;
