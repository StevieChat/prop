import React from 'react';

import styles from './AnswerOption.module.css';

const answerOption = (props) => {
    return(
        <li className={styles.li}>
            <button
                className={styles.Button}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onClick={props.onClick}>
                {props.answerContent}
            </button>    
        </li>
    );
}

export default answerOption;