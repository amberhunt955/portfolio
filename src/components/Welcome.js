import ResumeButton from "./ResumeButton";

function Welcome() {
  return (
    <div id="welcome-section">
      <div className="empty-div"></div>
      <div className="empty-div"></div>
      <div className="empty-div"></div>
      <div id="welcome-content">
        <h1>
          Hi, I'm
          <br />
          <span>Amber Hunt.</span>
          <br />
          I'm a MERN stack Software Developer.
        </h1>
        <ResumeButton />
        <div className="empty-div"></div>
      </div>
    </div>
  );
}

export default Welcome;
