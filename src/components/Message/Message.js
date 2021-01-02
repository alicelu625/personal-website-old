import React from 'react';

import classes from './Message.module.css';

const message = (props) => {
    return (
        <div className={classes.Message} style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            <p>This website was an old project and content is outdated.<br/>
                <br/>Please visit the new website for the most up to date information: <a href="https://alicezlu.com/">https://alicezlu.com/</a></p>
            <button className={classes.Button} onClick={props.closeMessage}>Close</button>
        </div>
    );
}

export default message;