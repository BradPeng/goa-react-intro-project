# Function

Predict what you get on your console when you execute the following code.

1.

```js
const func1 = (a, b) => a + b;
const func2 = func1;
console.log(func2(1, 2));
```

2.

```js
const func = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
func(1, 2, 3, 4, 5, 6);
```

3.

```js
const func1 = (a, b) => a + b;
const func2 = (c, d) => func1(c, d);
const func3 = func2;
console.log(func3(1, 2, 3, 4));
```

4.

```js
const obj = { a: 1 };
const func1 = (a) => ++a;
const func2 = (obj) => func1(obj.a++);
console.log(func2(obj));
console.log(obj);
```

5.

```js
const result1 = ((a, b = 3) => a + b)(1, 2);
console.log(result1);
```

6.

```js
const result2 = ((a, b = 3) => (c = 4) => a + b + c)(1, 2);
console.log(result2);
```
