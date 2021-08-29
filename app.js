const express = require("express");
const app = express();
const Post = require('../blog-api/api/models/posts');
const postsData = new Post();

app.get("/api/posts", (req, res)=>{
    res.status(200).send(postsData.get());
})

app.listen(8080, ()=>console.log("Listening on http://localhost:8080/"));