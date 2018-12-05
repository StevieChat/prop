import React from 'react';
import PropTypes from 'prop-types';

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

answerOption.PropTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default answerOption;