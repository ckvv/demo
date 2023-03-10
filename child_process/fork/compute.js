const longComputation = (count) => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += i;
    };
    return sum;
};

process.on('message', message => {
    let count = Number(message);
    const result = longComputation(count);
    process.send(result);
});