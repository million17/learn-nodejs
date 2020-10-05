let arr = [
    {name: 'Jone', action: 'run'}
];
let string = 'Mesut Ozil';
let {name} = arr[0];
console.log(name)

let [string1, string2] = string.split(' ');
console.log(string1);
console.log(string2);

let [a,b,c, ...result] = [1,2,3,4,5,6,7,8,9];
console.log(a,b,c,result)


