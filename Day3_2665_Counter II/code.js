/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n = init
    function increment() {
        return ++init
    }
    function decrement() {
        return --init
    }
    function reset() {
        init = n
        return init
    }

    return {
        increment,
        decrement,
        reset
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
