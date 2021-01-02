import React from 'react';
import BaskinLogo from '../../assets/images/baskin-logo.jpg';
import FreeCodeCampLogo from '../../assets/images/free-code-camp-logo.png';
import UdemyLogo from '../../assets/images/udemy-logo.png';
import classes from './Education.module.css';

const education = () => (
  <div className={classes.Education}>
    <div className={classes.EducationItem}>
      <div className={classes.Top}>
        <a href="https://www.soe.ucsc.edu/">
          <img 
            className={classes.Logo}
            src={BaskinLogo}
            alt="Jack Baskin Engineering UCSC Logo"
          />
        </a>
        <div className={classes.Info}>
          <a className={classes.School} href="https://www.soe.ucsc.edu/"><strong>University of California, Santa Cruz</strong></a>
          <p className={classes.Degree}>Bachelor - Computer Science</p>
          <p className={classes.OtherInfo} style = {{marginBottom: 0 }}>September 2016 - June 2020</p>
          <p className={classes.OtherInfo} style={{marginBottom: 0}}>Awards: Honors in Engineering</p>
        </div>
      </div>
      <div>
        <p style={{marginTop: 5, marginBottom: 0}}><strong>Description:</strong> At UC Santa Cruz, I developed foundational skills in computer science such as data structures, algorithms, and computer systems design. Through elective courses, I discovered my passion for web development, which gave me the push to begin pursuing a career in front-end/full stack web development and develop more skills post-college.</p>
      </div>
  </div>
  <div className={classes.EducationItem}>
      <div className={classes.Top}>
        <a href="https://www.freecodecamp.org/">
          <img 
            className={classes.Logo}
            src={FreeCodeCampLogo}
            alt="freeCodeCamp Logo"
          />
        </a>
        <div className={classes.Info}>
          <a className={classes.School} href="https://www.freecodecamp.org/"><strong>freeCodeCamp</strong></a>
          <p className={classes.OtherInfo} style = {{marginBottom: 0}}>September 2020 - Present</p>
          <p className={classes.otherInfo} style={{marginBottom: 0, marginTop: 0}}>Certification: Responsive Web Design</p>
        </div>
      </div>
      <div>
        <p style={{marginTop: 5, marginBottom: 0}}><strong>Description:</strong> College only gave me the basics in web development, so I took the initiative to find free online resources to expand my knowledge and skills. I discovered freeCodeCamp and began their Responsive Web Design Certification coursework, where I learned about HTML, CSS (including Flexbox and Grid), visual design, accessibility, and principles of responsive web design.</p>
      </div>
  </div>
  <div className={classes.EducationItem}>
      <div className={classes.Top}>
        <a href="https://www.udemy.com/">
          <img 
            className={classes.Logo}
            src={UdemyLogo}
            alt="Udemy Logo"
          />
        </a>
        <div className={classes.Info}>
          <a className={classes.School} href="https://www.udemy.com/"><strong>Udemy</strong></a>
          <p className={classes.OtherInfo} style = {{marginBottom: 0 }}>September 2020 - November 2020</p>
          <p className={classes.otherInfo} style={{marginBottom: 0, marginTop: 0}}>Course: React - The Complete Guide (incl Hooks, React Router, Redux)</p>
        </div>
      </div>
      <div>
        <p style={{marginTop: 5, marginBottom: 0}}><strong>Description:</strong> I had discovered that React is a very popular JavaScript library that is listed as a qualification for my role. Since I’ve never used React nor know how to use it, I enrolled myself in Udemy’s React course, where I learned about React through follow along coding practices and hands-on projects. Along with the course, I’ve put my newly learned skills to practice by building personal projects, such as this website.</p>
      </div>
    </div>
  </div>
);

export default education;