let jsonToMatrix = function(arr) {
    const keysMap = new Set()

    for (const eachObj of arr) {
        getKeys(eachObj, '')
    }

    const keys = Array.from(keysMap).sort()

    const res = []
    res.push(keys)
    
    for (const eachObj of arr) {
        const hash = {}
        getValues(hash, eachObj, '')
        const curRes = []
        for (const eachKey of keys) {
            curRes.push(hash[eachKey] !== undefined ? hash[eachKey] : '')
        }
        res.push(curRes)
    }

    return res

    function getKeys(obj, curKey) {
        if (!isObj(obj)) {
            keysMap.add(curKey)
            return
        }
        for (const eachKey in obj) {
            const nextKey = curKey ? `${curKey}.${eachKey}` : eachKey
            getKeys(obj[eachKey], nextKey)
        }
    }

    function getValues(hash, obj, curKey) {
        if (!isObj(obj)) {
            hash[curKey] = obj
            return
        }
        for (const eachKey in obj) {
            const nextKey = curKey ? `${curKey}.${eachKey}` : eachKey
            getValues(hash, obj[eachKey], nextKey)
        }
    }

    function isObj (obj) {
        return typeof obj === 'object' && obj !== null
    }
}

console.log(jsonToMatrix([
    {"b": 1, "a": 2},
    {"b": 3, "a": 4}
]))
console.log(jsonToMatrix([
    {"a": 1, "b": 2},
    {"c": 3, "d": 4},
    {}
]))
console.log(jsonToMatrix([
    {"a": {"b": 1, "c": 2}},
    {"a": {"b": 3,  "d": 4}}
]))
console.log(jsonToMatrix([
    [{"a": null}],
    [{"b": true}],
    [{"c": "x"}]
]))