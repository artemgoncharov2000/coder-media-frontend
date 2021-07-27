import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Main.scss';
import PostPreview from "../Post/PostPreview/PostPreview";

const Main = () => {

    return (
      <div className="mainContainer">
          <Header />
          <div className="content">
            <PostPreview/>
          </div>
          <Footer/>
      </div>
    );
};

export default Main;