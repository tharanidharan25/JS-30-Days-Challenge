/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    // Solution 1
    // const res = {}
    // this.forEach((val) => {
    //     let id = fn(val)
    //     if (!Object.hasOwn(res, id)) {
    //         res[id] = []
    //     }
    //     res[id].push(val)
    // })
    // return res

    // Solution 2
    const res = {}
    for (const val of this) {
        let id = fn(val)
        res[id] = res[id] || []
        res[id].push(val)
    }
    return res
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */