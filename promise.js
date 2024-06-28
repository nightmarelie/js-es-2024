// const testedPromise = new Promise((resolve, reject) => {
//     resolve('Promise is resolved');
//
// });

// const { promise, reject, resolve } = Promise.withResolvers ();

// any
console.log(await Promise.any([Promise.resolve(111)]));
