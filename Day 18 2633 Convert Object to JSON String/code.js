let jsonStringify = function (object) {
    if (typeof object === 'string') {
        return `"${object}"`
    }

    if (typeof object !== 'object') {
        return String(object)
    }

    if (object === null) {
        return String(object)
    }

    if (Array.isArray(object)) {
        const res = []
        for (const val of res) {
            res.push(jsonStringify(val))
        }
        return `[${res.join(',')}]`
    } else {
        const res = Object.keys(object).map((eachKey) => {
            return `"${eachKey}":${jsonStringify(object[eachKey])}`
        })
        return `{${res.join(',')}}`
    }
}

console.log(jsonStringify({"y":1,"x":2}))
console.log(jsonStringify({"a":"str","b":-12,"c":true,"d":null}))
console.log(jsonStringify({"key":{"a":1,"b":[{},null,"Hello"]}}))
console.log(jsonStringify(true))