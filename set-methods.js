let abc = new Set(['a', 'b', 'c']);
let dbf = new Set(['d', 'b', 'f']);

console.log(abc.union(dbf));
console.log(abc.intersection(dbf));
console.log(abc.difference(dbf));
console.log(abc.symmetricDifference(dbf));
