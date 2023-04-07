import { Button } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

import DownArrow from "./DownArrow";

function LearnMore() {
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setDisplay(false);
    DownArrow.display = true;
  }

  return (
    <footer id="icon-footer">
      <ScrollLink to="projects-section" spy={true} smooth={true} offset={-30} duration={500}>
        <Button onClick={handleClick} style={{ display: display ? '' : 'none' }} id="down-arrow" endIcon={<ArrowDownward fontSize="60px" filter="drop-shadow(0.9px 0.9px 1px #080b13ff)" />}>
          Learn more
        </Button>
      </ScrollLink>
    </footer>
  );
}

export default LearnMore;
