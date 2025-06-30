let throttle = function(fn, t) {
    let isRunning = false
    let latestArgs = null
    return function throttled(...args) {
        if (isRunning) {
            latestArgs = args
        } else {
            fn(...args)
            isRunning = true
            setTimeout(helper, t)
        }

        function helper() {
            if (latestArgs) {
                fn(...latestArgs)
                isRunning = true
                latestArgs = null
                setTimeout(helper, t)
            } else {
                isRunning = false
            }
        }
    }
}

const throttled = throttle(console.log, 50)
setTimeout(() => {
    throttled('log', 30)
}, 30)
setTimeout(() => {
    throttled('log', 40)
}, 40)
setTimeout(() => {
    throttled('log', 60)
}, 60)