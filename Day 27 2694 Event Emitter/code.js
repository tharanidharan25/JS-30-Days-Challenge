class EventEmitter {
    constructor() {
        this.allEvents = {}
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.allEvents.hasOwnProperty(eventName)) {
            this.allEvents[eventName] = []
        }
        this.allEvents[eventName].push(callback)
        const index = this.allEvents[eventName].length - 1
        return {
            unsubscribe: () => {
                this.allEvents[eventName][index] = undefined
                return undefined
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.allEvents.hasOwnProperty(eventName)) {
            return []
        }
        const callbacks = this.allEvents[eventName]
        const res = []
        for (const eachCall of callbacks) {
            if (eachCall) {
                res.push(eachCall(...args))
            }
        }
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