import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <section className="left">
        <div className="home-nav">
          <Link to="/">
            <div>Amber Hunt</div>
          </Link>
        </div>

        <div className="links-nav">
          <Link to="/projects">
            <div>Projects</div>
          </Link>

          <Link to="/about">
            <div>About</div>
          </Link>

          <Link to="/contact">
            <div>Contact</div>
          </Link>
        </div>
      </section>

      <section className="right">
        <Link to="/blog">
          <div>Blog</div>
        </Link>

      </section>
    </nav>
  );
}

export default NavBar;
