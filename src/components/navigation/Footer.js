import { useState, useEffect } from "react";

// styling
import { Button } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Footer() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.pageYOffset);
  const [footer, setFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (prevScrollPosition > currentScrollPosition && currentScrollPosition !== 0) {
        setFooter(true);
      } else {
        setFooter(false);
      }

      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <footer className={footer ? "visible-footer" : "hidden-footer"}>
      <p id="lefthand-footer">© Amber Hunt 2023</p>

      <div id="center-footer">
        <a href="https://www.linkedin.com/in/amberhunt955/" target="_blank" rel="noreferrer">
          <LinkedIn />
        </a>
        <a href="https://github.com/amberhunt955" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
      </div>

      <Button
        id="back-to-top"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        // endIcon={<ArrowUpward fontSize="calc(1vw + 1vh)" />}
      >
        BACK TO TOP
      </Button>
    </footer>
  );
}

export default Footer;