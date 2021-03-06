const { response } = require("express");
const express = require("express");
const app = express();
const Post = require('../blog-api/api/models/posts');
const postsData = new Post();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next(); // to allow the middleware to hit the next API endpoints
})

app.use('/uploads', express.static('uploads'));

app.get("/api/posts", (req, res)=>{
    res.status(200).send(postsData.get());
})

app.get("/api/posts/:post_id", (req, res)=>{
    const postId = req.params.post_id;
    const foundPost = postsData.getIndividualBlog(postId);
    if(foundPost) {
        res.status(200).send(foundPost)
    } else {
        res.status(404).send("Not Found");
    }
})


app.listen(8080, ()=>console.log("Listening on http://localhost:8080/"));