// console.log('start');

// let promiseGen = (context, timeOut) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(context);
//         }, timeOut);
//     });
// };

// promiseGen(1, 5000).then(context => console.log(context));
// promiseGen(2, 1000).then(context => console.log(context));
// promiseGen(3, 3000).then(context => console.log(context));

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
// console.log('finish');


let resolvePromise = (context) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`resolve ${context}`);
        }, 1000);
    });
};

let rejectPromise = (context) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`reject ${context}`);
        }, 1000);
    });
};

let throwPromise = (context) => {
    return new Promise((resolve, reject) => {
        throw {error: `throw ${context}`};
    });
};

// console.log('resolvePromise');
// resolvePromise("context")
//     .then(
//         (text) => console.log(`resolve ${text}`)
//     )
//     .catch(
//         (text) => console.log(`catch ${text}`)
//     )
//     .finally(
//         () => console.log('finally')
//     );

// console.log('rejectPromise');
// rejectPromise("context")
//     .then(
//         (text) => console.log(`resolve ${text}`)
//     )
//     .catch(
//         (text) => console.log(`catch ${text}`)
//     )
//     .finally(
//         () => console.log('finally')
//     );

// console.log('throwPromise');
// throwPromise("context")
//     .then(
//         (text) => console.log(`resolve ${text}`)
//     )
//     .catch(
//         (text) => console.log(`catch ${text.error}`)
//     )
//     .finally(
//         () => console.log('finally')
//     );

let f = () => {
    return throwPromise("context")
        .then(
            (text) => console.log(`resolve ${text}`)
        )
        .catch(
            (text) => {
                console.log(`catch ${text.error}`);
                // return "new promise context";
                // throw {error: "new promise context"};
                return;
            }
        )
        .finally(
            () => console.log('finally')
        );
};

f()
    .then(
        (text) => console.log(`f resolve ${text}`)
    )
    .catch(
        (text) => console.log(`f catch ${text.error}`)
    )
    .finally(
        () => console.log('f finally')
    );
