import React from 'react';

import Question from '../Question/Question';
import AnswerOption from '../AnswerOption/AnswerOption';

import styles from './InteractionWindow.module.css';

const interactionWindow = (props) => {
    
    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onClick={props.onClick}
            />
        );
    }
    
    return (
        <div className={styles.InteractionWindow}>
            <div className={styles.Center}>
                <Question content={props.question}></Question>
                {props.answerOptions.map(renderAnswerOptions)}
            </div>
        </div>
    );
};

export default interactionWindow;