import React, {FC} from 'react';
import './Button.scss';

type PropsT = {
  color: string,
  backgroundColor: string,
  value: string,
  type: 'button' | 'submit',

}

const Button: FC<PropsT> = ({
  color,
  backgroundColor,
  value,
  type,
}) => {

  const styles = {
    color: color,
    backgroundColor: backgroundColor,
  };

  return (
    <input className="button" style={styles} type={type} value={value} />
  );
};

export default Button;