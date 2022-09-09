import React, { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom';
import CommentDetail from '../CommentDetail/CommentDetail';
import Data from './../../fakeData/fakeData.json';

const Comment = () => {
   const { postId } = useParams();

   const [comment , setComment] = useState([]);
   const [commentId , setCommentId] = useState([]);

   useEffect(() => {
      setComment(Data);
   },[])

   useEffect(() => {
      const filteredComment = comment.filter(item => Number(item.postId) === Number(postId));
      setCommentId(filteredComment);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[comment])

   return (
      <div>
         {
            commentId.map(item => <CommentDetail item = {item} key = {item.id} />)
         }  
      </div>
   );
};

export default Comment;