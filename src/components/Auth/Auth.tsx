import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Input from "../Input/Input";
import './Auth.scss';

const Auth = () => {
  return (
    <div className="authContainer">
      <Header/>
      <div className="content">
        <Form title={"Hello, friend!"}>
          <Input type={"text"} value={""} placeholder={"Your@gmail"}/>
          <Input type={"password"} value={""} placeholder={"Password"}/>
          <Input type={"password"} value={""} placeholder={"Password(again)"}/>
        </Form>
      </div>
      <Footer/>
    </div>
  )
}

export default Auth;