function add(a, b) {
    let result = 0;
    do {
        result += a;
        a++;
    } while (a < b);

    return result;
}

addEventListener('message', (event) => {
    let {
        a,
        b
    } = event.data;

    postMessage({
        result: add(a, b)
    });
});

// onmessage = (event) => {
//     let {
//         a,
//         b
//     } = event.data;

//     postMessage({
//         result: add(a, b)
//     });
// }