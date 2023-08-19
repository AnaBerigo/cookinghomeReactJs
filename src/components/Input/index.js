import React from 'react';
import * as C from './styles';

const Input = ({type, placeholder, value, onChange}) => {
    return (
        <C.Container>
            <C.Input
                value={value}
                onChange={onChange}
                type={type}
                // placeholder={placeholder}
            />
            <C.Span>{placeholder}</C.Span>
            
        </C.Container>
    );
}

export default Input;