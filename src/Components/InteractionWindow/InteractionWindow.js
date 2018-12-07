import React from 'react';
import Description from '../Description/Description';

import styles from './InteractionWindow.module.css';

const interactionWindow = (props) => {
    
    return (
        <div className={styles.InteractionWindow}>
            <div className={styles.Center}>
                <Description description={props.description} />
            </div>
        </div>
    );
};

export default interactionWindow;