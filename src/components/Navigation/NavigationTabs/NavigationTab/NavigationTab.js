import React from 'react';
import classes from './NavigationTab.module.css';

const navigationTab = (props) => (
  <div>
    <button 
      className={classes.NavigationTab}
      onClick={props.clicked}
      style={{backgroundColor: props.viewing ? 'rgb(252, 249, 255)' : null}}>
      {props.label}
    </button>
  </div>
);

export default navigationTab;