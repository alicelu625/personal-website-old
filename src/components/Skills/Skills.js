import React from 'react';
import classes from './Skills.module.css';

const skills = () => (
  <div className={classes.Skills}>
    <p style={{marginTop: 0}}><strong>Programming Languages:</strong>
      <br/>Python, JavaScript, CSS, HTML, SQL, Java
    </p>
    <p><strong>Frameworks/Technologies:</strong>
      <br/>React.js, Redux, Node.js, Express.js, Vue.js, RESTful APIs, PostgreSQL, Firebase (database & authentication), Jest/Enzyme (unit testing), Chrome Dev Tools/Redux Dev Tools (debugging), Git, Figma, Postman, Content Management Systems (CMS), Android Studios
    </p>
    <p><strong>Technical Skills:</strong>
      <br/>Responsive Web Development, UX Design, Web Accessibility, Database Systems, Data Structures, Algorithms, Mobile Application Development, Computer Systems Design, Data Mining, Project Management
    </p>
    <p><strong>Other skills:</strong>
      <br/>Problem Solving, Adaptability, Teamwork, Leadership, Passionate, Communication, Priority Management, Creativity, Flexibility, Organization
    </p>
  </div>
);

export default skills;