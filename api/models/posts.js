const fs = require('fs')
const PATH = "./data.json";

class Posts {

    get() {
        /** Get Posts */
        return this.readData();
    }

    getIndividualBlog(postId) {
        /** Get one blog post */
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == postId);
        return foundPost;
    }

    add(newPost) {
        /** Add new Post */
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        // unshift appends the array and shifts an object to the top 
        // then we can store the data
        this.storeData(currentPosts);
    }

    readData() {
        let rawData = fs.readFileSync(PATH);
        let posts = JSON.parse(rawData);
        return posts;
    }

    storeData(rawData) {
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

    

module.exports = Posts;