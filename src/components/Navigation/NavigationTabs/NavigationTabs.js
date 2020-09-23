import React from 'react';
import NavigationTab from './NavigationTab/NavigationTab';
import classes from './NavigationTabs.module.css';
import {FaBars} from 'react-icons/fa';

const tabs = [
  {label: 'PROJECTS'},
  {label: 'EDUCATION'},
  {label: 'ABOUT ME'},
  {label: 'SKILLS'},
  {label: 'EXPERIENCE'}
]

const navigationTabs = (props) => (
  <div className={classes.Navigation}>
    <button className={classes.Button} onClick={props.drawerToggleClicked}><FaBars/> More</button>
    <div className={classes.NavigationTabs}>
      {tabs.map(tab => (
        <NavigationTab
          label={tab.label}
          key={tab.label}
          clicked={() => props.tabClicked(tab.label.toLowerCase())}
          viewing={props.viewing[tab.label.toLowerCase()]}
        />
      ))}
    </div>
  </div>
);

export default navigationTabs;