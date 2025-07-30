# Generator Functions

### <u>Creating Generator Functions:</u>
Generator functions are created by adding an `Asterisk(*)` after the function keyword.

*Example:*
```
let fibGenerator = function* () {
    ...some code
}
```

### <u>Description of Generator Functions:</u>
Generator Function declaration creates an `GeneratorFunction Object` (Every Generator function is represented by an Generator function object).

Each time a generator function is called, a `Generator Object` is returned.

When the `next()` method is called, Generator function is `executed until the next yield statement` and the function execution will be stopped and the `value in the yield statement will be returned`.

When the `next()` method is called again, `the execution of the function starts from where it was paused previously` and will be executed until the next yield statement(This is why we are using an infinite loop in this problem).

The `next()` method returns an object with a `value` property and `done` property.

> ***`value` Property*** returns the value in the yield statement.

> ***`done` Property*** returns a boolean that indicates whether the generator function has yielded its last value.

> ***`return` statement*** inside the generator function returns the same object as yield statement with `value property set as the value in the return statement` and `done property as true`. ***Note:*** Any next() calls after return statement has been executed will return an object with value property set to undefined and done property set to true.

> ***Note:***  done Property will be false if there are more yield/return statements

### Explaining the problem solution:

We take advantage of the fact that the generator functions will run until the yield statement and so we can use an infinite loop as long as there is an yield statement inside the loop.

So, the first time this functions is called, it will be yielded with the value of `n1` and when it's called the next time, the code block after the yield statement will be executed and since we are using an infinite loop, the function execution will be stopped again at the start of the next loop with the result stored in the n1 variable, which will be yielded.

***Note:*** The generator function in this solution will never return `done` property as true since we are not using a return statement anywhere, so `next()` can be called any number of times
```
var fibGenerator = function*() {
    let n1 = 0, n2 = 1

    while (true) {
        yield n1
        let temp = n2
        n2 = n1 + n2
        n1 = temp
    }
};
```