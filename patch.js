const axios = require('axios')

/**
 * Update the title of the todo with id 1
 */
async function updateTodoTitle() {
    try {
        let resp = await axios.patch(
            'https://jsonplaceholder.typicode.com/todos/1', { title: 'New title' });
        console.log('Update the title of the todo with id 1 :');
        console.log(resp.data);
        console.log();
    } catch (err) {
        console.log(err);
    }
}

/**
 * Update the completed field of the todo with id 6
 */
async function updateTodoCompleted() {
    try {
        let resp = await axios.patch(
            'https://jsonplaceholder.typicode.com/todos/6', { completed: true });
        console.log('Update the completed field of the todo with id 6 :');
        console.log(resp.data);
        console.log();
    } catch (err) {
        console.log(err);
    }
}

/**
 * Update the username of the user with id 6
 */
async function updateUserUsername() {
    try {
        let resp = await axios.patch(
            'https://jsonplaceholder.typicode.com/users/8', { username: 'It\'s me' });
        console.log('Update the username of the user with id 6 :');
        console.log(resp.data);
        console.log();
    } catch (err) {
        console.log(err);
    }
}

async function execPatch() {
    await updateTodoTitle();
    await updateTodoCompleted();
    await updateUserUsername();
}

module.exports = { execPatch }