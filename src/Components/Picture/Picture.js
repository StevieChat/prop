import React from 'react';

import styles from './Picture.module.css';

const picture = (props) => {
    return(
        <img className={styles.Picture} src={require(`../../Images/${props.imgName}.jpg`)} alt=""/>
    );
}

export default picture;