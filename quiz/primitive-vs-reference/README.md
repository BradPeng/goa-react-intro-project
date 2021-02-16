# Primitive vs Reference

Predict what you get on your console when you execute the following code.

1.

```js
let str = 'hoge';
const obj = { str };
str = 'fuga';
console.log(obj.str);
```

2.

```js
const obj1 = { str: 'hoge' };
const obj2 = { obj1 };
obj1.str = 'fuga';
console.log(obj2.obj1);
```

3.

```js
let num = 1;
const obj = { num };
num = 2;
console.log(obj.num);
```


4.

```js
let bool = true;
const obj = { bool };
bool = false;
console.log(obj.bool);
```

5.

```js
let error = new Error('error1');
const obj = { error };
error = new Error('error2');
console.log(obj.error.message);
```

6.

```js
const date = new Date();
const obj = { date };
date.setFullYear(date.getFullYear() - 1);
console.log(obj);
```

7.

```js
const arr = [1];
const obj = { arr };
arr.unshift(0);
console.log(obj);
```

8.

```js
const array = new Array(1);
const obj = { arr };
arr.unshift(0);
console.log(obj);
```

9.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr1 == arr2);
console.log(arr1 === arr2);
```

10.

```js
const obj1 = { a: 1 };
const obj2 = { ...obj1 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);
```

11.

```js
const obj0 = {};
let obj1 = { str: 'Andy' };
obj1 = Object.assign(obj0, obj1);
console.log(obj0);
console.log(obj1);
```