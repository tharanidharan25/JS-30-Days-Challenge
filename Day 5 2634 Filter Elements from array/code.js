/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    res = []
    for (let idx in arr) {
        idx = parseInt(idx)
        if (fn(arr[idx], idx)) {
            res.push(arr[idx])
        }
    }
    return res
};