import React, { memo } from 'react';

const Useroutput = (props) => {
    return (
        <div>
            <p>Hi ,hello I am{props.name} Nice to meet you</p>
            <p>I am {props.age} year old</p>
        </div>
    );
};

export default Useroutput;