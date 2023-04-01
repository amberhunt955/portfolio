import ResumeButton from "../ResumeButton";

function Welcome() {
  return (
    <div id="welcome-section">
      <div className="empty-div"></div>
      <div className="empty-div"></div>
      <div className="empty-div"></div>

      <div id="welcome-content">
        <h1 id="welcome-text">
          <span id="hi">Hi, my name is </span>
    
          <span id="name">Amber Hunt.</span>
         
          <span id="what-do">I build dynamic web applications.</span>
          
        </h1>

        <ResumeButton />

        <div className="empty-div"></div>
      </div>
    </div>
  );
}

export default Welcome;
