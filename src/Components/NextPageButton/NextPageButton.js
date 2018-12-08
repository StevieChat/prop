import React from 'react';

import styles from './NextPageButton.module.css';

const nextpagebutton = (props) => {
    return(
        <button 
        className={styles.Button}
        onClick={props.onClick}
        >Next</button>
    );
}

export default nextpagebutton;