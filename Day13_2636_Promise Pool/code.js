let promisePool = async function(functions, n) {
    return new Promise((resolve, reject) => {
        let i = 0
        let inProgress = 0

        function callback() {
            if (inProgress == 0 && i == functions.length) {
                resolve()
            }
            
            while (i < functions.length && inProgress < n) {
                functions[i++]().then(() => {
                    inProgress--
                    callback()
                })
                inProgress++
            }
        }
        callback()
    })
}