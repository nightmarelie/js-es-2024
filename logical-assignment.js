let result = false;

// if (result === false) {
//     result = 2;
// }
result ||= 2;

// if (result === true) {
//     result = 3;
// }
result &&= null;

// if (result === null || result === undefined) {
//     result = 4;
// }
result ??= 4;

console.log(result);
