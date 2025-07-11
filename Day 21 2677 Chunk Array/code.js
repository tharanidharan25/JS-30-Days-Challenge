/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
// var chunk = function(arr, size) {
//     const res = []
//     for (let i = 0; i < arr.length; i += size) {
//         const localRes = []
//         for (let j = i; j < i + size && j < arr.length; j++) {
//             localRes.push(arr[j])
//         }
//         res.push(localRes)
//     }
//     return res
// };

// Shorter Version
var chunk = function(arr, size) {
    const res = []
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size))
    }
    return res
};

console.log(chunk([1,2,3,4,5], 1))
console.log(chunk([1,9,6,3,2], 3))
console.log(chunk([8,5,3,2,6], 6))
console.log(chunk([], 1))
