import React from 'react';
import './Header.scss';
import SignUp from "../Buttons/SignUp/SignUp";
import LogIn from "../Buttons/LogIn/LogIn";


const Header = () => {
    return (
        <div className="headerContainer">
            <div className="left">
                CoderMedia
            </div>
            <div className="middle"></div>
            <div className="right">
              <LogIn/>
              <SignUp/>
            </div>
        </div>
    )
};

export default Header;