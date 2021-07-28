import React, {FC} from 'react';
import './Form.scss';
import SignUp from "../Buttons/SignUp/SignUp";
import Button from "../Buttons/Button/Button";

type OwnPropsT = {
  title: string | null,
  children: JSX.Element | JSX.Element[],
}

const Form: FC<OwnPropsT> = ({
    title,
    children,
  }) => {

  return (
    <div className="container">
      <div className="header">
        {/*<div className="title">*/}
          {title}
        {/*</div>*/}
      </div>
      <form className="form" onSubmit={() => {}}>
        {children}
        <Button
          color='white'
          backgroundColor='black'
          value='Sign Up'
          type='button'
        />
      </form>
    </div>
  )
};

export default Form;