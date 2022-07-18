const { execGet } = require('./get')
const { execPost } = require('./post')
const { execPatch } = require('./patch')
const { execDelete } = require('./delete')

/**
 * Run the scripts according to the arguments given in parameter
 */
async function main() {
    let arg = process.argv;
    let len = arg.length;
    if (len === 2) { // run all scripts
        console.log('READ\n');
        await execGet();
        console.log('CREATE\n');
        await execPost();
        console.log('UPDATE\n');
        await execPatch();
        console.log('DELETE\n');
        await execDelete();
    } else if (len === 3) { // run the script corresponding to the argument
        let type = arg[2];
        if (type === 'get') await execGet();
        if (type === 'post') await execPost();
        if (type === 'patch') await execPatch();
        if (type === 'delete') await execDelete();
    } else {
        console.error('Too much arguments');
    }
}

main()