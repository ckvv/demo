import './style/index.scss';
import Worker from './worker/test.worker';

import { cube } from './js/math.js';

const worker = new Worker();

worker.postMessage({
    a: 1,
    b: 2000000000
});
worker.onmessage = function (event) {
    console.log(`result:`, event.data.result);
};


function component() {
    var element = document.createElement('div');
    element.classList = 'hello';

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML =   `Hello ${cube(2)}`;
    // consonle.log('ss');
    return element;
}

document.body.appendChild(component());

