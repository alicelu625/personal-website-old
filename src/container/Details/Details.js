import React, {Component} from 'react';
import classes from './Details.module.css';
import NavigationTabs from '../../components/NavigationTabs/NavigationTabs';
import Projects from '../../components/Projects/Projects';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import WorkExperience from '../../components/WorkExperience/WorkExperience';

class Details extends Component {
    state = {
        selected: 'projects'
    }

    selectTabHandler = (tab) => {
        this.setState({selected: tab});
    }
    render () {
        let tab = null;
        //check which tab is selected
        switch(this.state.selected) {
            case ('projects'):
                tab = <Projects/>;
                break;
            case ('education'):
                tab = <Education/>
                break;
            case ('skills'):
                tab = <Skills/>
                break;
            case ('work experience'):
                tab = <WorkExperience/>
                break;
            default: 
                tab = null;
        }

        const tabList = {
            'projects': false,
            'education': false,
            'skills': false,
            'work experience': false
        }

        //for styling purposes, pass property of viewing tab
        for (let key in tabList) {
            if (key !== this.state.selected) {
                tabList[key] = false;
            }
            else {
                tabList[key] = true;
            }
        }

        return (
            <div className={classes.Details}>
                <NavigationTabs
                    tabClicked={this.selectTabHandler}
                    viewing={tabList}
                />
                <p className={classes.Title}>{this.state.selected.toUpperCase()}</p>
                {tab}
            </div>
        );
    }
}

export default Details;

/*
<div className={classes.Details}>
            <p>Take a look at my resume: <br/></p>
            <p>Take a look at my projects: <br/><a href="https://github.com/alicelu625">https://github.com/alicelu625</a></p>
            <p>Connect with me: <br/><a href="https://www.linkedin.com/in/zifei-alice-lu/">https://www.linkedin.com/in/zifei-alice-lu/</a></p>
        </div>
*/