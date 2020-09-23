import React from 'react';
import classes from './Details.module.css';
import Profile from '../../components/Profile/Profile';
import Projects from '../../components/Projects/Projects';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import WorkExperience from '../../components/WorkExperience/WorkExperience';

const details = (props) => {
	let tab = null;
	let title = null;
	//check which tab is selected
	switch(props.tab) {
		case ('about me'):
			tab = <Profile/>;
			break;
		case ('projects'):
			tab = <Projects/>;
			title = 'Putting my skills to practice:'
			break;
		case ('education'):
			tab = <Education/>
			title = 'My journey in acquiring skills & knowledge:'
			break;
		case ('skills'):
			tab = <Skills/>
			title = 'My skills inventory:'
			break;
		case ('experience'):
			tab = <WorkExperience/>
			title = 'Take a stroll down my professional journey:'
			break;
		default: 
			tab = null;
	}

	return (
		<div className={classes.Details}>
			<p className={classes.Title}>{title}</p>
			{tab}
		</div>
	);
}

export default details;