import { useState, useEffect } from "react";

function Footer() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.pageYOffset);
  const [footer, setFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (prevScrollPosition > currentScrollPosition) {
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
      <div>Back to top</div>
    </footer>
  );
}

export default Footer;
