import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function Footer() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.pageYOffset);
  const [footer, setFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (prevScrollPosition > currentScrollPosition && currentScrollPosition !== 0 ) {
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
      <div>© Amber Hunt 2023</div>
      <Button id="back-to-top" onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>BACK TO TOP</Button>
    </footer>
  );
}

export default Footer;
