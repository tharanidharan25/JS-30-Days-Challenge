function objDiff(o1, o2) {
    if (!isObj(o1) && !isObj(o2)) {
        return o1 === o2 ? {} : [o1, o2]
    }

    if (!isObj(o1) || !isObj(o2)) {
        return [o1, o2]
    }

    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return [o1, o2]
    }

    const diff = {}

    for (const key in o1) {
        if (o2.hasOwnProperty(key)) {
            const res = objDiff(o1[key], o2[key])
            if (Object.keys(res).length > 0) {
                diff[key] = res
            }
        }
    }

    return diff

    function isObj(obj) {
        return obj !== null && typeof obj === 'object'
    }
}

console.log(objDiff({}, {
    "a": 1,
    "b": 2
}))
console.log(objDiff(
    {
        "a": 1,
        "v": 3,
        "x": [],
        "z": {
            "a": null
        }
    },
    {
        "a": 2,
        "v": 4,
        "x": [],
        "z": {
            "a": 2
        }
    }
))
console.log(objDiff(
    {
        "a": 5,
        "v": 6,
        "z": [1, 2, 4, [2, 5, 7]]
    },
    {
        "a": 5,
        "v": 7,
        "z": [1, 2, 3, [1]]
    }
))
console.log(objDiff(
    {
        "a": {"b" : 1}
    },
    {
        "a": [5]
    }
))