/**
 * Update the title of the todo with id 1
 */
async function updateTodoTitle() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PATCH',
        body: JSON.stringify({ title: 'New title' }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let res = await resp.json();
    console.log('Update the title of the todo with id 1 :');
    console.log(res);
    console.log();
}

/**
 * Update the completed field of the todo with id 6
 */
async function updateTodoCompleted() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos/6', {
        method: 'PATCH',
        body: JSON.stringify({ completed: true }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let res = await resp.json();
    console.log('Update the completed field of the todo with id 6 :');
    console.log(res);
    console.log();
}

/**
 * Update the username of the user with id 6
 */
async function updateUserUsername() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/users/8', {
        method: 'PATCH',
        body: JSON.stringify({ username: 'It\'s me' }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let res = await resp.json();
    console.log('Update the username of the user with id 6 :');
    console.log(res);
    console.log();
}

async function execPatch() {
    await updateTodoTitle();
    await updateTodoCompleted();
    await updateUserUsername();
}

module.exports = { execPatch }