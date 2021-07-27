import React from 'react';
import imagePreview from '../../../test-images/codecode.jpg';
import './PostPreview.scss';

const PostPreview = () => {
  return (
    <div className="container">
      <img src={imagePreview} className="image"/>
      <div className="previewTitle">
        <div className="title">
          Let’s make some code
        </div>
      </div>
      <div className="previewSubtitle">
        <div className="subTitle">
          In this article you will learn how make awesome code
        </div>
      </div>
    </div>
  )
}

export default PostPreview;