const fs = require('fs')
const PATH = "./data.json";

class Posts {

    add(newPost) {
        const data = this.readData();
    }

    get() {
        return this.readData();
    }

    readData() {
        let rawData = fs.readFileSync(PATH);
        let posts = JSON.parse();
    }
}

module.exports = Posts;