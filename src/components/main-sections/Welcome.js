import ResumeButton from "../ResumeButton";
import DownArrow from "../navigation/DownArrow";

function Welcome() {
  return (
    <div id="welcome-section">
      <div id="welcome-content">
        <h1 id="welcome-text">
          <span id="hi">Hi, my name is </span>
    
          <span id="name">Amber Hunt.</span>
         
          <span id="what-do">I build dynamic web applications.</span>
        </h1>

        <ResumeButton />

        {/* <div className="empty-div"></div> */}
        <DownArrow />
      </div>
    </div>
  );
}

export default Welcome;
