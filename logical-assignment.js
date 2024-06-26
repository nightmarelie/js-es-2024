let result = false;

// if (result === false) {
//     result = 2;
// }
result ||= 2;

// if (result === true) {
//     result = 3;
// }
result &&= 3;

console.log(result);
