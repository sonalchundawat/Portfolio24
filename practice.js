// function createCounter() {
//     let count = 0;
//     return function () {
//         return ++count;
//     };
// }
// const counter = createCounter();
// console.log(counter()); // ?
// console.log(counter()); // ?
// console.log(counter()); // ?

// console.log(foo);
// var foo = "Hello";
// console.log(foo);

// function foo() {
//     return "World";
// }

// let a = 10;
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);

// console.log('Start');
// setTimeout(() => console.log('Timeout'), 0);
// Promise.resolve().then(() => console.log('Promise'));
// console.log('End');

// const obj = {
//     value: 42,
//     getValue: function () {
//         return this.value;
//     },
// };

// const fn = obj.getValue;
// console.log(obj.getValue()); // ?
// console.log(fn()); // ?

// const arr = [1, 2, 3, 4];
// const result = arr.reduce((acc, curr, index) => {
//     if (index % 2 === 0) acc.push(curr * 2);
//     return acc;
// }, []);
// console.log(result);

// const arr = [10, 20, 30];
// const [first, ...rest] = arr;
// console.log(first, rest);

// const newArr = [...arr, 40];
// console.log(newArr);

// const key = 'name';
// const obj = { [key]: 'John', age: 30 };
// console.log(obj);

async function asyncTask() {
    console.log('Start');
    const result = await Promise.resolve('Resolved');
    console.log(result);
    console.log('End');
}
asyncTask();
console.log('Outside');
