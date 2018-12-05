import React from 'react';
// import PropTypes from 'prop-types';

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
                onAnswerSelected={props.onAnswerSelected}
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

    // interactionWindow.PropTypes = {
    //     answer: PropTypes.string.isRequired,
    //     answerOptions: PropTypes.array.isRequired,
    //     question: PropTypes.string.isRequired,
    //     onAnswerSelected: PropTypes.func.isRequired
    // };
};

export default interactionWindow;