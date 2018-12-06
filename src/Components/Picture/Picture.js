import React from 'react';

const picture = (props) => {
    return(
        <img src={require(`../../Images/${props.imgName}.jpg`)} alt=""/>
    );
}

export default picture;