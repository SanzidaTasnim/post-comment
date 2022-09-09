import React from 'react';
import './CommentDetail.css';

const CommentDetail = ({item}) => {

   const {image ,name , email , body } = item ;

   const random = Math.floor(Math.random() * 1000000 + 999999);

   return (
      <div className="container">
         <div className="comment-image">
            <img src={image} alt="user" />
         </div>
         <div className="comment-detail">
            <h2>{ name }</h2>
            <h3>{ email }</h3>
            <h4>{ body }</h4>
            <h4>Id: {random}</h4>
         </div>
         
      </div>
   );
};

export default CommentDetail;