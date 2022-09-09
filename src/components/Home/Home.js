import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
         const newData= data.slice(0,10);
         setPosts(newData);
      })
   },[])
   
   return (
      <div>
         {
            posts.map((post, index) => <Post post={post} key={index}/>)
         }
      </div>
   );
};

export default Home;