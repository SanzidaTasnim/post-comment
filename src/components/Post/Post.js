import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const { title, body, id } = post;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Posts of the Day
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {title}
          </Typography>
          <Typography variant="body2">
            {body}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/post/${id}`} style={{textDecoration: 'none'}}>
            <Button variant="outlined">Read Details</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
