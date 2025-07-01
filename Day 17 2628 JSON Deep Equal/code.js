let areDeepEqual = function(o1, o2) {
    if (typeof o1 !== typeof o2) {
        return false
    }

    if (typeof o1 !== 'object') {
        return o1 === o2
    }

    if (o1 === null || o2 === null) {
        return o1 === o2
    }

    if (Array.isArray(o1) || Array.isArray(o2)) {
        if (String(o1) !== String(o2)) {
            return false
        }

        for (const idx in o1) {
            if (!areDeepEqual(o1[idx], o2[idx])) {
                return false
            }
        }
    } else {
        if (Object.keys(o1).length !== Object.keys(o2).length) {
            return false
        }

        for (const key in o1) {
            if (!areDeepEqual(o1[key], o2[key])) {
                return false
            }
        }
    }

    return true
}

console.log(areDeepEqual({"x":1,"y":2}, {"x": 1, "y": 2}))
console.log(areDeepEqual({"y":2,"x":1}, {"x":1,"y":2}))
console.log(areDeepEqual({"x":null,"L":[1,2,3]}, {"x":null,"L":["1","2","3"]}))
console.log(areDeepEqual(null, {}))
console.log(areDeepEqual('a', {}))