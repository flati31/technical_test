const axios = require('axios')

/**
 * Return the list of all users
 */
async function getAllUsers() {
    try {
        let resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('List of all users :');
        console.log(resp.data);
        console.log();
    } catch (err) {
        console.log(err);
    }
}


/**
 * Return the album with the id 3
 */
async function getAlBumNumber() {
    try {
        let resp = await axios.get('https://jsonplaceholder.typicode.com/albums/3')
        console.log('The album with id 3 :');
        console.log(resp.data);
        console.log();
    } catch (err) {
        console.log(err);
    }
}

/***
 * Return the comments where postId = 3
 */
async function getCommentsByPostId() {
    try {
        let resp = await axios.get(
            'https://jsonplaceholder.typicode.com/comments?postId=3')
        console.log('The comments where postId = 3 :');
        console.log(resp.data);
        console.log();
    } catch (err) {
        console.log(err);
    }
}

/***
 * Return the comments where postId = 3 and email = Nathan@solon.io
 */
async function getCommentsByPostIdAndEmail() {
    try {
        let resp = await axios.get(
            'https://jsonplaceholder.typicode.com/comments?postId=3&email=Nathan@solon.io')
        console.log('The comments where postId = 3 and email = Nathan@solon.io :');
        console.log(resp.data);
        console.log();
    } catch (err) {
        console.log(err);
    }
}

async function execGet() {
    await getAllUsers();
    await getAlBumNumber();
    await getCommentsByPostId();
    await getCommentsByPostIdAndEmail();
}

module.exports = { execGet }