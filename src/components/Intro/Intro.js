import React from 'react';
import classes from './Intro.module.css';

const intro = () => (
  <div className={classes.Intro}>
    <h1 className={classes.Greeting}>Hi, I'm Alice Lu.</h1>
    <h2 className={classes.Role}>Front-end/full stack web developer</h2>
    <h3 className={classes.Note}>I'm looking for opportunities!</h3>
  </div>
);

export default intro;