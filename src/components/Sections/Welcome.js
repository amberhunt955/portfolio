import ResumeButton from "../ResumeButton/ResumeButton";

function Welcome() {
  return (
    <div id="welcome-section">
      <div id="welcome-content">
        <h1 id="welcome-text">
          <span id="hi">Hi, my name is </span>

          <span id="name">Amber Hunt.</span>

          <span id="what-do">I'm a Software Engineer!</span>
        </h1>

        <ResumeButton />

      </div>
    </div>
  );
}

export default Welcome;
