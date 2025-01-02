import React from 'react';
import classes from './LoadingSpinner.module.css'


const LoadingSpinner = () => (
        <div className={classes.spinner}>
            <div className={classes.loader}></div>
        </div>
);


export default LoadingSpinner