import React from 'react';
import { removePropertiesDeep } from '@babel/types';

function User(props) {
    return (
        <div>
             Name: {props.name} and age: {props.age}
        </div>
    );
}

export default User;