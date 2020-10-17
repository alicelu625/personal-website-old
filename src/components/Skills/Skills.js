import React from 'react';
import classes from './Skills.module.css';

const skills = () => (
  <div className={classes.Skills}>
    <p style={{marginTop: 0}}><strong>Programming Languages:</strong>
      <br/>Python, JavaScript, CSS, HTML, SQL, Java, C, C++
    </p>
    <p><strong>Frameworks/Technologies:</strong>
      <br/>React.js, Redux, Vue.js, Webpack, Axios, Py4Web, SaSS Preprocessors, Database Systems (PostgreSQL, Firebase), Content Management Systems (CMS), Android Studios, Unix, Git, REST APIs, LaTeX, Slack, RapidMiner, Tableau
    </p>
    <p><strong>Technical Skills:</strong>
      <br/>Data Structures, Algorithms, Abstract Data Types, Web Development, Mobile App Development, Database Systems, Computer Systems Design, Data Mining, Project Management
    </p>
    <p><strong>Other skills:</strong>
      <br/>Problem Solving, Adaptability, Teamwork, Leadership, Passionate, Communication, Priority Management, Creativity, Flexibility, Organization
    </p>
  </div>
);

export default skills;