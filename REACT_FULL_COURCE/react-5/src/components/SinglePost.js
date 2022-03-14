import React, { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";

const SinglePost = () => {
  const [post, setPost] = useState({});

  useEffect(async () => {
    //  axios.get("https://jsonplaceholder.typicode.com/posts")
    //  .then((res) => setPosts(res.data))
    //  .catch((err) => console.log(err))
const fetchPost = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
}
  
  }, []);

  return (
    <>
    <h1>Post No {post.id}</h1>
     {Object.keys(post) ? (
 <Card
 className="post"
 border="dark"
 bg="dark"
 text="light"
 key={post.id}
>
 <Card.Header>
   <small className="text-muted">User {post.userId}</small>
 </Card.Header>
 <Card.Body>
   <Card.Title>{post.title}</Card.Title>
   <Card.Text>{post.body}</Card.Text>
   <Button variant="primary" className="buttons">
     Like
   </Button>
   <Button variant="primary" className="buttons">
     Comment
   </Button>
 </Card.Body>
 <Card.Footer>
   <small className="text-muted">
     Uploaded {Math.floor(Math.random() * 60)} mins ago
   </small>
 </Card.Footer>
</Card>
     )
         
 : (
        <Spinner animation="border" />
      )}
    </>
  );
};

export default SinglePost;
