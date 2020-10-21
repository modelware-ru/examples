console.log('start');

let promiseGen = (context, timeOut) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(context);
        }, timeOut);
    });
};

promiseGen(1, 5000).then(context => console.log(context));
promiseGen(2, 1000).then(context => console.log(context));
promiseGen(3, 3000).then(context => console.log(context));

//
// let p1 = new Promise((resolve, reject) => {
//     resolve('OK');
// });
//
// let p2 = new Promise((resolve, reject) => {
//     reject('FAILED');
// });
//
// p1
//     .then(value => {
//         console.log('then', value);
//     })
//     .catch(value => {
//         console.log('catch', value);
//     });
//
// p2
//     .then(value => {
//         console.log('then', value);
//     })
//     .catch(value => {
//         console.log('catch', value);
//     });
//
console.log('finish');
