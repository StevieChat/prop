import React from 'react';

import styles from './PrevPageButton.module.css';

const prevpagebutton = (props) => {
    return(
        <button 
        className={styles.Button}
        onClick={props.onClick}
        >Previous</button>
    );
}

export default prevpagebutton;