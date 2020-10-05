console.log(`first line
second line`);
const a = 5;
const b = 6;
console.log(`This a + b : ${a+b}
This a * b : ${a * b}`);

console.log('--------------Tagged Template Literals---------');
var c = 6;
var d = 12;
function foo(strings, ...value) {
    console.log('.' + strings[0] +  '.');
    console.log('.' + strings[1] +  '.');
    console.log('.' + strings[2] +  '.');
    console.log('.' + strings[3] +  '.');
    console.log(value[0]);
    console.log(value[1]);
    console.log(value[2]);
}

foo`Sun ${c+d}
Product ${c*d}
Diviton ${c/d}
`
