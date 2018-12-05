import React from 'react';
import PropTypes from 'prop-types';

import styles from './Question.module.css';

const question = (props) => {
    return (
        <h2 className={styles.Question}>{props.content}</h2>
    );
};

question.PropTypes = {
    content: PropTypes.string.isRequired
};

export default question;