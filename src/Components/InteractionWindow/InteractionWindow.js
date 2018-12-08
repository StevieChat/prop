import React from 'react';
import Description from '../Description/Description';
import NextPageButton from '../NextPageButton/NextPageButton';

import styles from './InteractionWindow.module.css';

const interactionWindow = (props) => {
    
    return (
        <div className={styles.InteractionWindow}>
            <div className={styles.Center}>
                <Description description={props.description} />
                <NextPageButton></NextPageButton>
            </div>
        </div>
    );
};

export default interactionWindow;