import React from 'react';

import styles from './ImageWindow.module.css';
import Picture from '../Picture/Picture';

const imageWindow = (props) => {    

    function renderImages(key) {
        return (
            <Picture
                key={key.name}
                imgName={key.name}
            />
        );
    }

    return (
        <div className={styles.ImageWindow}>
            {props.imgNames.map(renderImages)}
        </div>
    );
};

export default imageWindow;