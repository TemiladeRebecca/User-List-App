import React from 'react';
import classes from './CustomButton.module.css'

const CustomButton = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className={classes.container}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.svgIcon}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </div>
      <div className={classes.toggleContainer}>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={isDarkMode}
          onChange={toggleTheme}
          className={classes.toggleCheckbox}
        />
        <label htmlFor="toggle" className={classes.toggleLabel}></label>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.svgIcon}
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CustomButton;