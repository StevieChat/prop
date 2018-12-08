import React from 'react';
import Description from '../Description/Description';
import NextPageButton from '../NextPageButton/NextPageButton';

import styles from './InteractionWindow.module.css';

const interactionWindow = (props) => {

    let nextPageButtonDisplay = 
        (!props.isLast) 
            ? <NextPageButton onClick={props.onClick} />
            : null; 
    
    return (
        <div className={styles.InteractionWindow}>
            <div className={styles.Center}>
                <Description description={props.description} />
                {nextPageButtonDisplay}
            </div>
        </div>
    );
};

export default interactionWindow;