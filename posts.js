const fs = require('fs')
const PATH = "./data.json";

class Posts {

    add(newPost) {
        const data = this.readData();
        data.unshift(newPost);
    }

    get() {
        return this.readData();
    }

    readData() {
        try {
            return JSON.parse(fs.readFileSync(PATH, 'utf8'));
        } catch (err) {
            console.error(err)
            return false;
        }
    }
}

module.exports = Posts;