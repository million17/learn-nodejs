const makeArray = (...value) => {return value};
console.log('Make Arrays : ', makeArray(1,3,4,5,6,8));

const getSum = (a,b) => {return a+b};
console.log('Sum : ', getSum(4,5));

const greeting = 'Trieu Ngo Quang';
const convertToLowerCase = (string) => {return string.toLowerCase()}
console.log(greeting, '=>', convertToLowerCase(greeting));


//Arrows function with array iterate
const arr = [1,3,4,5,6,7,8];
const sum = arr.reduce((a,b) => {return a + b}, 0)
console.log('sum with arrow function :', sum);
// or rid of the return 
const sum2 = arr.reduce((a,b) => a + b,0);
console.log('sum with arrows rid of the return :', sum2);

const arr1 = ['first', 'second', 'third', 'fourth', 'fifth'];
const len = arr1.map(item => item.length);
console.log('Map : ', len);

const greater = arr.filter(item => item > 5);
console.log('Greate > 5', greater);


// const check = n => n = (n%2===0) ? n*2 : n*3;    
const loopCheck = arr.map((item) => item = (item%2===0) ? item*2 : item*3);
console.log(loopCheck);

