import React from 'react';
import Logo from '../../../assets/images/website-logo.png';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../Backdrop/Backdrop';
import NavigationTab from '../NavigationTabs/NavigationTab/NavigationTab';

const tabs = [
  {label: 'PROJECTS'},
  {label: 'EDUCATION'},
  {label: 'ABOUT ME'},
  {label: 'SKILLS'},
  {label: 'EXPERIENCE'}
]

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return(
    <Aux>
      <Backdrop show={props.open} backdropClicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div>
          <img className={classes.Logo}
            src={Logo}
          />
        </div>
        <button className={classes.BackButton} onClick={props.closed}>Back</button>
        <nav>
          <ul className={classes.List}>
            {tabs.map(tab => (
              <NavigationTab
                label={tab.label}
                key={tab.label}
                clicked={() => props.tabClicked(tab.label.toLowerCase())}
                viewing={props.viewing[tab.label.toLowerCase()]}
              />
            ))}
          </ul>
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer;