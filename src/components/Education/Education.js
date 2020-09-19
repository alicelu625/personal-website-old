import React from 'react';
import BaskinLogo from '../../assets/images/baskin-logo.jpg';
import classes from './Education.module.css';

const education = () => (
    <div className={classes.Education}>
        <img 
            className={classes.Logo}
            src={BaskinLogo}
            alt="Jack Baskin Engineering UCSC Logo"
        />
        <div className={classes.Info}>
            <a className={classes.School} href="https://www.soe.ucsc.edu/"><strong>University of California, Santa Cruz</strong></a>
            <p className={classes.Degree}>Bachelor - Computer Science</p>
            <p className={classes.OtherInfo} style = {{marginBottom: 0 }}>September 2016 - June 2020</p>
            <p className={classes.OtherInfo}>Awards: Honors in Engineering</p>
        </div>
        
    </div>
);

export default education;