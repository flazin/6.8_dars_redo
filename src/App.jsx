import image from "./assets/Emoji.png";
import img from "./assets/Group 1.jpg";
import "./App.css";
function App() {
  return (
    <div className="container mt-4">
      <a href="#" className="buttons">
        About me
      </a>
      <a href="#" className="buttons">
        Skills
      </a>
      <a href="#" className="buttons">
        Project
      </a>
      <a href="#" className="buttons">
        Contact
      </a>
      <h3 className="title">
        Hi <img className="image" src={image} alt="" />,<br />
        I’m Charles, <br /> Front-end Developer
      </h3>
      <p className="desc">
        I design and develop experiences that make people’s lives <br /> simpler
        through Web and Mobile apps.I work with FIgma ,<br /> HTML5, CSS3,
        JavaScript, React, ReactNative and Flutter.
      </p>
      <img className="img" src={img} alt="" />
      <a href="#" className="hire">
        HIRE ME
      </a>
      <br />
      <a href="#" className="see">
        SEE MY PROJECTS
      </a>
      <br />
    </div>
  );
}

export default App;
