class EventEmitter {
    // Solution 1
    // constructor () {
    //     this.allEvents = {}
    // }

    // Solution 2
    eventMap = {}
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        
        // Solution 1
        // if (!this.allEvents.hasOwnProperty(eventName)) {
        //     this.allEvents[eventName] = []
        // }
        // this.allEvents[eventName].push(callback)
        // const index = this.allEvents[eventName].length - 1
        // return {
        //     unsubscribe: () => {
        //         this.allEvents[eventName][index] = undefined
        //         return undefined
        //     }
        // };
        
        // Solution 2
        if (!this.eventMap.hasOwnProperty(eventName)) {
            this.eventMap[eventName] = new Set()
        }
        this.eventMap[eventName].add(callback) 

        return {
            unsubscribe: () => {
                // Solution 1
                // this.allEvents[eventName][index] = undefined
                // return undefined

                // Solution 2
                this.eventMap[eventName].delete(callback)
            }
        }
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {

        // Solution1
        // if (!this.allEvents.hasOwnProperty(eventName)) {
        //     return []
        // }
        // const callbacks = this.allEvents[eventName]
        // const res = []
        // for (const eachCall of callbacks) {
        //     if (eachCall) {
        //         res.push(eachCall(...args))
        //     }
        // }
        // return res

        // Solution 2
        if (!this.eventMap.hasOwnProperty(eventName)) {
            return []
        }
        const res = []
        this.eventMap[eventName].forEach((cb) => res.push(cb(...args)))
        return res
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */