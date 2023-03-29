import { Link as PageLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  return (
    <nav className="nav">
      <section className="left">
        <div className="home-nav">
          <ScrollLink to="welcome-section" spy={true} smooth={true} offset={-80} duration={500}>
            <div className="link">Amber Hunt</div>
          </ScrollLink>
        </div>

        <div className="links-nav">
          <ScrollLink to="projects-section" spy={true} smooth={true} offset={-80} duration={500}>
            <div className="link">Projects</div>
          </ScrollLink>

          <ScrollLink to="about-section" spy={true} smooth={true} offset={-80} duration={500}>
            <div className="link">About</div>
          </ScrollLink>

          <ScrollLink to="contact-section" spy={true} smooth={true} offset={-80} duration={500}>
            <div className="link">Contact</div>
          </ScrollLink>
        </div>
      </section>

      <section className="right">
          <PageLink to="/media" style={ {textDecoration: "none"} }>
            <div className="link">Media</div>
          </PageLink>

          <PageLink to="/blog" style={ {textDecoration: "none"} }>
            <div className="link">Blog</div>
          </PageLink>
      </section>
    </nav>
  );
}

export default NavBar;
