/**
 * Create a new album
 */
async function addNewAlbum() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'POST',
        body: JSON.stringify({ userId: 1, title: 'New album' }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let res = await resp.json();
    console.log('Creation of a new album :');
    console.log(res);
    console.log();
}

/**
 * Create a new post
 */
async function addNewPost() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ userId: 1, title: 'Tornado', body: 'Wind in your ears' }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let res = await resp.json();
    console.log('Creation of a new post :');
    console.log(res);
    console.log();
}

async function execPost() {
    await addNewAlbum();
    await addNewPost();
}

module.exports = { execPost }