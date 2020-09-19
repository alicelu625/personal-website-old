import React from 'react';
import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';
import Profile from './components/Profile/Profile';
import Details from './container/Details/Details';

function App() {
  return (
    <div>
      <Layout>
        <div className={classes.Intro}>
          <h1 className={classes.Greeting}>Hi, I'm Alice Lu.</h1>
          <h2 className={classes.Role}>Aspiring front-end/full stack web developer</h2>
          <h3 className={classes.Note}>I'm looking for new opportunities!</h3>
        </div> 
        <Profile/>
        <Details />
      </Layout>
    </div>
  );
}

export default App;