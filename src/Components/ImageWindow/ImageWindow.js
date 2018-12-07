import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import styles from './ImageWindow.module.css';
import picStyles from '../Picture/Picture.module.css';
import Picture from '../Picture/Picture';

const imageWindow = (props) => {    

    function renderImages(key) {
        return (
            <Col sm={4}  className={picStyles.Polaroid}>
                <Picture
                    key={key.name}
                    imgName={key.name}
                />
            </Col>
        );
    }

    return (
        <div className={styles.ImageWindow}>
            <Container className={styles.Container}>
                <Row>
                    {props.imgNames.map(renderImages)}
                </Row>
            </Container>
         </div>
    );
};

export default imageWindow;