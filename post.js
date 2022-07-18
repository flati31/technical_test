const axios = require('axios')

/**
 * Create a new album
 */
async function addNewAlbum() {
    try {
        let resp = await axios.post(
            'https://jsonplaceholder.typicode.com/albums', { userId: 1, title: 'New album' });
        console.log('Creation of a new album :');
        console.log(resp.data);
        console.log();
    } catch (err) {
        console.log(err);
    }
}

/**
 * Create a new post
 */
async function addNewPost() {
    try {
        let resp = await axios.post(
            'https://jsonplaceholder.typicode.com/posts', { userId: 1, title: 'Tornado', body: 'Wind in your ears' });
        console.log('Creation of a new post :');
        console.log(resp.data);
        console.log();
    } catch (err) {
        console.log(err);
    }
}

async function execPost() {
    await addNewAlbum();
    await addNewPost();
}

module.exports = { execPost }