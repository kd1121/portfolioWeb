import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href = "https://www.instagram.com/kd.exe_/"> 
        <InstagramIcon/>
        </a> 
        <a href = "https://twitter.com/0pFrenzy"> 
        <TwitterIcon/>
        </a> 
        <a href = "https://www.linkedin.com/in/kishan-maniya-434635198/"> 
        <LinkedInIcon/>
        </a> 
        <a href = "https://github.com/kd1121"> 
        <GithubIcon/>
        </a> 
      </div>
      <p> &copy; 2022 Kishan</p>
    </div>
  );
}

export default Footer;
