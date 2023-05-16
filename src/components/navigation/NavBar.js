import { Link as PageLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { useState } from "react";
import { Button, Menu, MenuItem, Fade } from "@mui/material";
import { Menu as MenuIcon, Home } from "@mui/icons-material";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [icon, setIcon] = useState(<MenuIcon />)
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleClick = (event) => {
    if (location.pathname === "/" && event.currentTarget.id === "main") {
      setAnchorEl(event.currentTarget);
    } else if (event.currentTarget.id === "main") {
      setIcon(<MenuIcon />);
    } else {
      setIcon(<Home />);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }

  return (
    <nav id="nav">
      <section className="left">
        <div className="home-nav">
          <PageLink to="/" style={{ textDecoration: "none"}}>
            <Button
              style={{ color: "black" }}
              id="main"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              startIcon={icon}
            >
            </Button>
          </PageLink>

          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem>
              <ScrollLink to="" onClick={() => {handleClose(); scrollToTop();}} spy={true} smooth={true} duration={500}>
                Top / Resume
              </ScrollLink>
            </MenuItem>

            <MenuItem>
              <ScrollLink onClick={handleClose} to="projects-section" spy={true} smooth={true} offset={-30} duration={500}>
                Projects
              </ScrollLink>
            </MenuItem>

            <MenuItem>
              <ScrollLink onClick={handleClose} to="about-section" spy={true} smooth={true} offset={-30} duration={500}>
                About
              </ScrollLink>
            </MenuItem>

            <MenuItem>
              <ScrollLink onClick={handleClose} to="contact-section" spy={true} smooth={true} offset={-30} duration={500}>
                Contact
              </ScrollLink>
            </MenuItem>
          </Menu>
        </div>
      </section>

      <section className="right">
        <PageLink to="/media" style={{ textDecoration: "none" }}>
          <Button onClick={handleClick} id="fade-button" style={{ color: "black" }}>
            Media
          </Button>
        </PageLink>

        {/* <PageLink to="/blog" style={{ textDecoration: "none" }}>
          <Button onClick={handleClick} id="fade-button" style={{ color: "black" }}>
            Blog
          </Button>
        </PageLink> */}
      </section>
    </nav>
  );
}

export default NavBar;
