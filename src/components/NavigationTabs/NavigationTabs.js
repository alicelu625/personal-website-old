import React from 'react';
import NavigationTab from './NavigationTab/NavigationTab';
import classes from './NavigationTabs.module.css';

const tabs = [
    {label: 'PROJECTS'},
    {label: 'EDUCATION'},
    {label: 'SKILLS'},
    {label: 'WORK EXPERIENCE'}
]

const navigationTabs = (props) => (
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
);

export default navigationTabs;