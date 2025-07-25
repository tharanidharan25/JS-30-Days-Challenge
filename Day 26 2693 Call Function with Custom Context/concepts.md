# Explanation of the solution

```
Function.prototype.callPolyfill = function(context, ...args) {
    return this.apply(context, args)
}
```

#### 'this' keyword inside the method refers to the variable that is calling this particular method.

#### 'this' keyword here refers to the function that is calling this callPolyfill method.

> ***e.g:*** increment.callPolyfill({count: 1})

> `Note: In this example increment function is calling the method callPolyfill, so inside the callPolyfill method, 'this' keyword refers to the increment function` 

> Inside the callPolyfill method, we are using apply method to apply the 'context' sent as an argument to the function that is calling the callPolyfill method using the 'this' keyword. And the second argument for the apply method is an array of args that needs to be sent to the function (increment function in this case) to which the context is being applied to.
