import React from 'react';

import styles from './Picture.module.css';

const picture = (props) => {
    return(
        <div className={styles.Polaroid}>
            <img 
            height="200"
            title={props.imgName}
            className={styles.Picture} 
            src={require(`../../Images/${props.imgName}.jpg`)} 
            alt=""/>    
        </div>
        
    );
}

export default picture;