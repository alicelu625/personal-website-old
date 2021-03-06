import React from 'react';
import WebsiteLogo from '../../assets/images/website-logo.png';
import BurgerLogo from '../../assets/images/burger-builder-logo.png';
import CSALogo from '../../assets/images/csa-logo.jpg';
import classes from './Projects.module.css';

const projects = () => (
  <div className={classes.Projects}>
    <div className={classes.Project}>
      <div className={classes.Top}>
          <a href="https://alicezlu.com/personal-website-old">
            <img 
              className={classes.Logo}
              src={WebsiteLogo}
              alt="Alice's website logo"
            />
          </a>
          <div>
            <a className={classes.Title} href="https://alicezlu.com/personal-website-old">My Personal Website (This site!)</a>
            <p style={{marginBottom: 0}}>September 2020 - Present</p>
          </div>
      </div>
      <div>
        <p style={{marginTop: 5}}><strong>Description:</strong> This website was built for the purpose of showcasing my web development skills as well as my projects and experiences, which gets regularly updated. For mobile/tablet support, a toggle side navigation was implemented in place of a top navigation. As I learn more about web development, I will also implement new features and designs to improve the user interface and user experience.</p>
        <p><strong>What I used:</strong> React 16, JavaScript (ES6), HTML5, CSS3 w/ Mobile First, Webpack</p>
        <p style={{marginBottom: 0}}><strong>Currently working on (Next updates!):</strong></p>
        <ul style={{marginTop: 0}}>
          <li>Implement whole new design with a modern look</li>
          <li>Learn more about design and improve overall user interface</li>
          <li>Implement better way to handle lengthy descriptions</li>
          <li>Implement project details page for each project</li>
          <li>Add animation</li>
        </ul>
    </div>
  </div>
  <div className={classes.Project}>
    <div className={classes.Top}>
      <a href="https://alicelu625.github.io/react-burger-builder/">
        <img 
          className={classes.Logo}
          style={{border: "2px solid #D39952"}}
          src={BurgerLogo}
          alt="Burger Builder logo"
        />
      </a>
      <div>
        <a className={classes.Title} href="https://alicelu625.github.io/react-burger-builder/">Burger Builder</a>
        <p style={{marginBottom: 0, marginTop: 0}}>
          <a href="https://alicelu625.github.io/react-burger-builder/">
            <button className={classes.ViewButton}>View Project</button>
          </a>
        </p>
        <p style={{marginBottom: 0, marginTop: 0}}>September 2020 - November 2020</p>
      </div>  
    </div>
      <div>
        <p style={{marginTop: 5}}><strong>Description:</strong> A web application that allows a user to build a burger by adding/removing ingredients and place the order if authenticated. An order summary is displayed upon checkout & user can proceed to checkout by filling out contact data. For mobile support (smaller screens), a toggle menu is implemented in place of the toolbar on the top.</p>
        <p><strong>What I used:</strong> React 16, Redux, React-Router, React-Thunk, JavaScript (ES6), HTML5, CSS3 w/ Mobile First, Webpack, Backend/Database: Google Firebase, Axios, Firebase Authentication, Unit Tests (Jest, Enzyme)</p>
      </div>
  </div>
  <div className={classes.Project}>
    <div className={classes.Top}>
      <a href="https://www.youtube.com/watch?v=MFH4bRvFcU8&feature=youtu.be">
        <img 
          className={classes.Logo}
          src={CSALogo}
          alt="CSA App logo"
        />
      </a>
      <div>
        <a className={classes.Title} href="https://www.youtube.com/watch?v=MFH4bRvFcU8&feature=youtu.be">CSA App</a>
        <p style={{marginBottom: 0, marginTop: 0}}>
          <a href="https://www.youtube.com/watch?v=MFH4bRvFcU8&feature=youtu.be">
            <button className={classes.ViewButton}>View Demo</button>
          </a>
        </p>
        <p style={{marginBottom: 0, marginTop: 0}}>2018</p>
      </div>
    </div>
      <div>
        <p style={{marginTop: 5}}><strong>Description:</strong> An Android mobile application to improve accessibility in student organizations for students to obtain information about the organization with a simple interface that users could easily navigate through. This application is specified to UC Santa Cruz's Chinese Student Association, but can be modified to fit other organizations.</p>
        <p><strong>What I used:</strong> Android Studios, Java, XML</p>
      </div>
    </div>
  </div>
);

export default projects;