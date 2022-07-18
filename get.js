/**
 * Return the list of all users
 */
async function getAllUsers() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/users')
    let res = await resp.json()
    console.log('List of all users :');
    console.log(res);
    console.log();
}


/**
 * Return the album with the id 3
 */
async function getAlBumNumber() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/albums/3')
    let res = await resp.json()
    console.log('The album with id 3 :');
    console.log(res);
    console.log();
}

/***
 * Return the comments where postId = 3
 */
async function getCommentsByPostId() {
    let resp =
        await fetch('https://jsonplaceholder.typicode.com/comments?postId=3')
    let res = await resp.json()
    console.log('The comments where postId = 3 :');
    console.log(res);
    console.log();
}

/***
 * Return the comments where postId = 3 and email = Nathan@solon.io
 */
async function getCommentsByPostIdAndEmail() {
    let resp = await fetch(
        'https://jsonplaceholder.typicode.com/comments?postId=3&email=Nathan@solon.io')
    let res = await resp.json()
    console.log('The comments where postId = 3 and email = Nathan@solon.io :');
    console.log(res);
    console.log();
}

async function execGet() {
    await getAllUsers();
    await getAlBumNumber();
    await getCommentsByPostId();
    await getCommentsByPostIdAndEmail();
}

module.exports = { execGet }