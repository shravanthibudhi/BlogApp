

const API_URL = "http://localhost:8080/api/posts";
const API_BASE_URL = "http://localhost:8080/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    /** Fetch posts from the API */
    fetch(API_URL, {
        method: 'GET'
    }).then((response)=> {
        return response.json();
    }).then((data)=>{
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) => {
    /** Build list of posts on the front-end */
    let blogPostsContent = "";
    for(blogPost of blogPosts){
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
        const postImage = `${API_BASE_URL}${blogPost.post_image}`;
        blogPostsContent += `
        <div class="post">
            <div class="post-image" style="background-image: url(${postImage})"></div>
            <div class="post-content">
                <div class="post-date">${postDate}</div>
                <div class="post-title">${blogPost.title}</div>
                <div class="post-text"><p>${blogPost.content}</p></div>
            </div>
        </div>
        `
    }
    document.querySelector('.blog-posts').innerHTML = blogPostsContent;
}