import React from 'react';
import profilePicture from '../../assets/images/profile-picture.jpeg';
import classes from './Profile.module.css';
import {FaRegEnvelope} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaLink} from 'react-icons/fa';
import {FaPaperclip} from 'react-icons/fa';
import resume from '../../assets/files/AliceLuResume.pdf';
import ResumeIcon from '../../assets/images/resume-icon.png';
import LinkedInLogo from '../../assets/images/linkedin-logo.png';
import GitHubLogo from '../../assets/images/github-logo.png';

const profile = () => {
  return(
    <div className={classes.Intro}>
      <div className={classes.Profile}>
        <div className={classes.Pic}>
          <img 
            className={classes.Picture}
            src={profilePicture}
            alt="Alice in front of a nice waterfall."
          />
          <p className={classes.Email}><FaRegEnvelope className={classes.Icons}/> <strong>Contact me:</strong> <a style={{textDecoration:"none"}} href="mailto:alicelu625@gmail.com">alicelu625@gmail.com</a></p>
        </div>
        <div className={classes.Info}>
          <p style={{marginTop: 0}}>
            <strong>Location:</strong>
            <br/> <FaMapMarkerAlt className={classes.Icons}/> San Francisco, CA
          </p>
          <p>
            <strong>About me:</strong>
            <br/>I'm a recent graduate at the University of California: Santa Cruz, where I discovered my passion for web development. I enjoy learning new tools and concepts to improve user experience and performance. It is one of my goals to build products that will help simplify ways for people to complete tasks, communicate with each other, access information, etc.
          </p>
          <p style={{marginBottom: 0}}>
            <strong>When I'm not coding, I like to:</strong>
            <br/>Exercise, discover new Apps, spread positivity
          </p>
        </div>
      </div>
      <div className={classes.References}>
        <a style={{textDecoration:"none"}} href={resume}>
          <div className={classes.Reference}>
            <img
              className={classes.Logos}
              src={ResumeIcon}
              alt="Resume Icon"
            />
            <p style={{marginTop: 0}}>
              <FaPaperclip className={classes.Icons}/> Resume
            </p>
          </div>
        </a>
        <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/zifei-alice-lu/">
          <div className={classes.Reference}>
            <img
              className={classes.Logos}
              src={LinkedInLogo}
              alt="LinkedIn Logo"
            />
            <p style={{marginTop: 0}}>
              <FaLink className={classes.Icons} /> LinkedIn
            </p>
          </div>
        </a>
        <a style={{textDecoration:"none"}} href="https://github.com/alicelu625">
          <div className={classes.Reference}>
            <img
              className={classes.Logos}
              src={GitHubLogo}
              alt="GitHub Logo"
            />
            <p style={{marginTop: 0}}>
              <FaLink className={classes.Icons}/> GitHub
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default profile;