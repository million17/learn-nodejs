let arrNull = [];
let arr = '123456789'.split('');
let mapArr = arr.map((item, index) => item + index);
console.log(mapArr);

console.log(arr);
arr.forEach(value => {
    if (parseInt(value) === 1 || parseInt(value) === 2) {
        arrNull.push(value);
    }
})
console.log(arrNull)

// Rest parameter
console.log('-------REST PARAMETER----------');
function y( x, y, ...a) {
    console.log(a.length);
    return ( x + y ) *a.length
}

console.log(y(1,2,'2','false',2227) === 9);


//Spread Operator
console.log('---SPREAD OPERATOR--------');
let params = ['HI', 2,2];
let other = [1,2,...params];
console.log([...other]);
