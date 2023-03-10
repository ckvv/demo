const {
    parentPort
} = require('worker_threads');

const longComputation = (count) => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += i;
    };
    return sum;
};


parentPort.on('message', (msg) => {
    const result = longComputation(msg);
    parentPort.postMessage({
        [msg]: result
    });
})