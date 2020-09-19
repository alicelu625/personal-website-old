import React from 'react';
import WebsiteLogo from '../../assets/images/website-logo.png';
import BurgerLogo from '../../assets/images/burger-builder-logo.png';
import CSALogo from '../../assets/images/csa-logo.jpg';
import classes from './Projects.module.css';

const projects = () => (
    <div className={classes.Projects}>
        <div className={classes.Project}>
            <div className={classes.Top}>
                <img 
                    className={classes.Logo}
                    src={WebsiteLogo}
                    alt="Alice's website logo"
                />
                <div>
                <a className={classes.Title} href="https://alicezlu.com/">My Personal Website</a>
                    <p style={{marginBottom: 0}}>September 2020 - Present</p>
                </div>
            </div>
            <div>
                <p style={{marginTop: 5}}><strong>Description</strong>: This website was built for the purpose of showcasing my web development skills as well as my projects and experiences, which gets regularly updated. As I learn more about web development, I will also implement new features and designs to improve the user interface and user experience.</p>
                <p><strong>What I used: React 16</strong>, HTML5, CSS3 w/ Mobile First, Webpack</p>
                <p style={{marginBottom: 0}}><strong>Future work:</strong></p>
                <ul style={{marginTop: 0}}>
                    <li>Improving mobile navigation (possible implementing drop down navigation)</li>
                    <li>Improve overall user interface</li>
                </ul>
            </div>
        </div>
        <div className={classes.Project}>
            <div className={classes.Top}>
                <img 
                    className={classes.Logo}
                    style={{border: "2px solid #D39952"}}
                    src={BurgerLogo}
                    alt="Burger Builder logo"
                />
                <div>
                    <a className={classes.Title} href="https://alicelu625.github.io/react-burger-builder/">Burger Builder</a>
                    <p style={{marginBottom: 0}}>September 2020 - Present</p>
                </div>
                
            </div>
            <div>
                <p style={{marginTop: 5}}><strong>Description</strong>: A single page web application that allows users to build a burger by adding/removing ingredients. An order summary is displayed upon checkout. For mobile support, a toggled side navigation was implemented in place of a desktop supported toolbar.</p>
                <p><strong>What I used</strong>: React 16, HTML5, CSS3 w/ Mobile First, Webpack</p>
                <p style={{marginBottom: 0}}><strong>Future work</strong>:</p>
                <ul style={{marginTop: 0}}>
                    <li>Implement checkout page</li>
                    <li>Add server requests support (HTTP/Ajax)</li>
                    <li>Add routing</li>
                    <li>Add Redux</li>
                    <li>Add authentification</li>
                </ul>
            </div>
        </div>
        <div className={classes.Project}>
            <div className={classes.Top}>
                <img 
                    className={classes.Logo}
                    src={CSALogo}
                    alt="CSA App logo"
                />
                <div>
                    <a className={classes.Title} href="https://www.youtube.com/watch?v=MFH4bRvFcU8&feature=youtu.be">CSA App</a>
                    <p style={{marginBottom: 0}}>2018</p>
                </div>
            </div>
            <div>
                <p style={{marginTop: 5}}><strong>Description</strong>: An Android mobile application to improve accessibility in student organizations for students to obtain information about the organization with a simple interface that users could easily navigate through. This application specified to UC Santa Cruz's Chinese Student Association, but can be modified to fit other organizations.</p>
                <p><strong>What I used</strong>: Android Studios, Java, XML</p>
            </div>
        </div>
    </div>
);

export default projects;