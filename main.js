import { sum, calc, trianglechecker } from "./lib.js";

console.log(sum(1, 2))
console.log(sum(3, 2))

console.log(calc(1, 1, '+'))
console.log(calc(1, 1, '-'))
console.log(calc(1, 1, '*'))
console.log(calc(1, 1, '/'))

console.log(trianglechecker(2, 2, 2))
console.log(trianglechecker(10, 10, 10))
console.log(trianglechecker(3, 4, 4))
console.log(trianglechecker(4, 3, 4))
console.log(trianglechecker(4, 4, 3))
console.log(trianglechecker(10, 10, 2))
console.log(trianglechecker(3, 4, 5))
console.log(trianglechecker(10, 11, 12))
console.log(trianglechecker(5, 4, 2))
console.log(trianglechecker(0, 0, 0))
console.log(trianglechecker(3, 4, -5))
console.log(trianglechecker(1, 1, 3))
console.log(trianglechecker(2, 4, 2))