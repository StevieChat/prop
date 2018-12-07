import React from 'react';
//import {Container, Row, Col} from 'react-grid-system';

import styles from './Description.module.css';

const description = (props) => {    
    return (
        <p className={styles.Description}>
            {props.description}
        </p>
    );
};

export default description;