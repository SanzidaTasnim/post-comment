import React from 'react';
import {useState , useEffect} from 'react';
import {useParams , Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PostDetail = () => {

   const { id } = useParams();
   const [detail , setDetail] = useState({});

   useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setDetail(data))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

   return (
      <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {detail.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {detail.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/comments/${id}`} style={{textDecoration: "none"}}>
          <Button size="small">Comments</Button>
        </Link>
      </CardActions>
    </Card>
   );
};

export default PostDetail;
