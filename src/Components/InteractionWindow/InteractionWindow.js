import React from 'react';
import Description from '../Description/Description';
import NextPageButton from '../NextPageButton/NextPageButton';
import PrevPageButton from '../PrevPageButton/PrevPageButton';

import styles from './InteractionWindow.module.css';

const interactionWindow = (props) => {

    let nextPageButtonDisplay = 
        (!props.isLast) 
            ? <NextPageButton onClick={props.onClickNext} />
            : null; 

    console.log("isFirst: " + props.isFirst)

    let prevPageButtonDisplay = 
        (!props.isFirst) 
            ? <PrevPageButton onClick={props.onClickPrev} />
            : null; 
    
    return (
        <div className={styles.InteractionWindow}>
            <div className={styles.Center}>
                <Description description={props.description} />
                {nextPageButtonDisplay}
                {prevPageButtonDisplay}
            </div>
        </div>
    );
};

export default interactionWindow;