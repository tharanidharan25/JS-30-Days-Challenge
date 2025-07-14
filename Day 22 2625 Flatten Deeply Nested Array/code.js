/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = []
    const bt = (curN, cur)  => {
        for (let i = 0; i < cur.length; i++) {
            if (curN <= 0 || !Array.isArray(cur[i])) {
                res.push(cur[i])
            } else {
                bt(curN - 1, cur[i])
            }
        }
    }
    bt(n, arr)
    return res
};