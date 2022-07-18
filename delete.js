/**
 * Delete the user with id 1
 */
async function deleteUserById() {
    await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'DELETE',
    });
    console.log('Delete the user with id 1');
    console.log();
}

/**
 * Delete albums where userId = 9
 */
async function deleteAlbumByuserId() {
    await fetch('https://jsonplaceholder.typicode.com/albums?userId=9', {
        method: 'DELETE',
    });
    console.log('Delete albums where userId = 9');
    console.log();
}

/**
 * Delete albums where userId = 9 and title = aperiam odio fugiat
 */
async function deleteAlbumByuserIdAndTitle() {
    await fetch(
        'https://jsonplaceholder.typicode.com/albums?userId=9&title=aperiam+odio+fugiat', {
            method: 'DELETE',
        });
    console.log('Delete albums where userId = 9 and title = aperiam odio fugiat');
    console.log();
}


async function execDelete() {
    await deleteUserById();
    await deleteAlbumByuserId();
    await deleteAlbumByuserIdAndTitle();
}

module.exports = { execDelete }