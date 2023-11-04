// eslint-disable-next-line no-unused-vars
import React from 'react';
import { InputStyled, InputContainer } from './styled';

// eslint-disable-next-line react/prop-types
const Input = ({ value, onChange, label, id, ...props }) => {
  return (
    <>
      <InputContainer>
        <label htmlFor={id}>{label}</label>
        <InputStyled
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          {...props}
        />
      </InputContainer>
    </>
  );
};

export default Input;
