import React from 'react';

import styles from './Picture.module.css';

const picture = (props) => {
    return(
        <img 
            height="300px"
            title={props.imgName}
            className={styles.Picture} 
            src={require(`../../assets/Images/${props.imgName}`)} 
            alt=""/>   
    );
}

export default picture;