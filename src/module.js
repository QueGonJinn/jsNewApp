console.log('Module2.js');

async function start() {
    return await Promise.resolve('async working')
}

start().then(console.log);