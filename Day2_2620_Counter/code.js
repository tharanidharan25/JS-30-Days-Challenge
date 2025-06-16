/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let init = n
    return () => init++ // arrow function
    
    // return function() {
    //     return init++
    // };
};

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

/*

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

link to Editorial - https://leetcode.com/problems/counter/editorial/

Topics - Closure, Arrow Function, Closures Versus Classes

*/