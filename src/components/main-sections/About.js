import amberPhoto from "./amber-ai.png";
import { Avatar } from "@mui/material";

import AboutDownArrow from "../navigation/AboutDownArrow";

function About() {
  return (
    <div id="about-section">
      <h2 className="section-header">A LITTLE BIT ABOUT ME</h2>

      <div id="about-content">
        <p id="about-text">
          Hey there! I'm Amber, a motivated and dedicated software engineer based in Columbus, Ohio.
          <br />
          <br />
          I thrive on creating innovative web applications utilizing the MERN stack, and I'm constantly seeking new opportunities to learn and grow in
          my craft. With a passion for solving complex problems and creating user-friendly experiences, I approach every project with a commitment to
          delivering high-quality solutions.
          <br />
          <br />
          Outside of coding, you might find me scaling the walls of a rock climbing gym, lost in a good book, or delving into the complexities of
          learning a new (human) language. My drive to continually learn and improve translates into my work as a software developer. Let's work
          together to bring your next project to life!
        </p>

        <Avatar id="bio-photo" src={amberPhoto} alt="AI-generated painting of amber" sx={{ width: 300, height: 300 }} />
      </div>
      <AboutDownArrow />
    </div>
  );
}

export default About;
