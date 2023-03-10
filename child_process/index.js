const {
    fork
} = require('child_process');
const path = require('path');
const {
    Worker,
} = require('worker_threads');

const workerpool = require('workerpool');
const pool = workerpool.pool();

const LOOP_COUNT = 5000000000;
const rcount = 3;
const longComputation = (count) => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += i;
    };
    return sum;
};

async function compute(){
    const compute = fork(path.join(__dirname, './fork/compute.js'));
    compute.send(LOOP_COUNT);
    let asfun = () => new Promise(resolve => {
        compute.on('message', result => {
            console.log(result)
            resolve(result)
        });
    });

    let result = await asfun();
};

async function com_worker (){
    const worker = new Worker(path.join(__dirname, './fork/com_worker.js'), {
        workerData: null
    });

    worker.postMessage(LOOP_COUNT);
    let asfun = () => new Promise(resolve => {
        worker.on('message', result => {
            console.log(result)
            resolve(result)
        });
    });
    let result = await asfun();
    // console.log(`结果:`,result);
};


(async ()=>{
    let dateS = new Date();

    // 子进程
    let computearr =[]
    for(let i =0;i<rcount;i++){
        computearr.push(compute())
    }
    await Promise.all(computearr);
    console.log(`fork耗时${new Date() - dateS}`);

    // worker_thread
    // computearr =[]
    // for(let i =0;i<rcount;i++){
    //     computearr.push(com_worker())
    // } 
    // dateS = new Date();
    // await Promise.all(computearr);
    // console.log(`com_worker耗时${new Date() - dateS}`);


    // 线程池子
    // computearr =[]
    // for(let i =0;i<rcount;i++){
    //     computearr.push(pool.exec(longComputation,[LOOP_COUNT]));
    // } 
    // dateS = new Date();
    // await Promise.all(computearr);
    // console.log(`workerpool耗时${new Date() - dateS}`);


    // 单线程
    // dateS = new Date();
    // for(let i =0;i<rcount;i++){
    //     longComputation(LOOP_COUNT);
    // } 
    // console.log(`单线程耗时${new Date() - dateS}`);
})();