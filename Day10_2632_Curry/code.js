var curry = function(fn) {
    let nums = []
    return function curried(...args) {
        nums = [...nums, ...args]
        if (fn.length === nums.length) {
            const res = fn(...nums)
            nums = []
            return res
        } else {
            return curried
        }
    }
}

const sum = (a, b, c) => a + b + c
const cSum = curry(sum)
console.log(cSum(1)(2)(3))
console.log(cSum(1,2)(3))
console.log(cSum(1,2,3))