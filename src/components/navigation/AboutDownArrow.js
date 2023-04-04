
import { ArrowDownward } from "@mui/icons-material";

import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

function AboutDownArrow() {
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setDisplay(false);
  };

  return (
    <footer id="icon-footer">
      <ScrollLink to="contact-section" spy={true} smooth={true} offset={-30} duration={500}>
        <ArrowDownward
          onClick={handleClick}
          id="single-arrow"
          fontSize="60px"
          filter="drop-shadow(0.9px 0.9px 1px #080b13ff)"
          style={{ display: display ? "block" : "none" }}
        />
      </ScrollLink>
    </footer>
  );
}

export default AboutDownArrow;
