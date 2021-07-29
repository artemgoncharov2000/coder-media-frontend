import React, {FC, useState} from 'react';
import './Input.scss';

type PropsT = {
  type: 'text' | 'password',
  value: string | undefined,
  placeholder?: string | undefined,
}

const Input: FC<PropsT> = ({
    type,
    value,
    placeholder,
  }) => {

  return (
      <input className="input" type={type} value={value} placeholder={placeholder}/>
  );
}

export default Input;