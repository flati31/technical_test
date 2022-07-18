const axios = require('axios')

/**
 * Delete the user with id 1
 */
async function deleteUserById() {
    try {
        let resp =
            await axios.delete('https://jsonplaceholder.typicode.com/users/1');
        console.log('Delete the user with id 1');
        console.log(resp.status);
    } catch (err) {
        console.log(err);
    }
}

/**
 * Delete the album with id 21
 */
async function deleteAlbumById() {
    try {
        let resp =
            await axios.delete('https://jsonplaceholder.typicode.com/albums/21');
        console.log('Delete the album with id 21');
        console.log(resp.status);
    } catch (err) {
        console.log(err);
    }
}

async function execDelete() {
    await deleteUserById();
    await deleteAlbumById();
}

module.exports = { execDelete }