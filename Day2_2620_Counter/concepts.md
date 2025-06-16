# Closures versus classes:

### Example of a Class in JavaScript 
```
class Adder {
  constructor(a) {
     this.a = a;
  }

  add(b) {
    const sum = this.a + b;
    return sum;
  }
}
const addTo2 = new Adder(2);
addTo2.add(5); // 7
```
## True Encapsulation
Closures are very similar to classes, but closures gives us ***true encapsulation***. For example, in the above code with a class, it is possible to change the value of a at any point using the below code:
```
add2.a = 3
```

But it's not possible to change the value of n in this problem, once inititated

>Note: It is possibe to achieve true encapsulation using classes using ***the # prefix syntax***

## Storage of functions in memory

If you create many instances of a class, ***each instance stores a single reference to the prototype object where all the methods are stored***.

But for closures, ***all methods are generated and a copy of each is stored in memory each time the outer function is called***.

> **Note:** For this reason classes might perform better for use cases with larger number of methods

## Relevant Links

- [Problem Link](https://leetcode.com/problems/counter/description/) 
- [Solution Link](https://www.youtube.com/watch?v=yEGQQAG5V68&list=PLQpVsaqBj4RIpDQIVowFni58LsK4cM9Qz&index=2)