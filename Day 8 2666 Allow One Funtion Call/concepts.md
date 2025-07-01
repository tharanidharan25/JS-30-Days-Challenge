# Apply method in Functions

### ***What is it and what does it do?***
Apply method applies some context to the function. Similar to how classes have this keyword.

```
const person = {
    name: "Tharani"
}

function printName(greeting) {
    console.log(`${greeting} ${this.name}`)
}

printName.apply(person, ['Hello'])
```

> Output: Hello Tharani

In the above code, we are using apply method to apply the object 'person' as context to the function printName. So, this will be the object person, so when console logging this.name, the name value in the person object will be printed in the console.

> **Note:** To pass in parameters to the function while using apply method, we have to pass the parameters as an array like how the ['hello'] is passed in the above example