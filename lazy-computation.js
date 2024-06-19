const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.map(i => i ** 2));

function * lazyMap(arr, mapFn) {
    for (let i of arr) {
        yield mapFn(i);
    }
}

const lazySquares = lazyMap(arr, i => i ** 2);

console.log([...lazySquares]);
