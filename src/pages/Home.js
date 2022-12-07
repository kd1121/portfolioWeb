import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Kishan</h2>
        <div className="prompt">
          <p>A Web developer with a passion for learning and creating.</p>
          <a href = "https://www.linkedin.com/in/kishan-maniya-434635198/">
          <LinkedInIcon />
          </a>
          <a href = "https://twitter.com/0pFrenzy">
          <TwitterIcon />
          </a>
          <a href = "https://www.github.com/kd1121">
          <GithubIcon />
          </a>
          
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM, UI/UX
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL,
              MongoDB, DynamoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
