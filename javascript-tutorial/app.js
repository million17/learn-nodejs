let arr = [
    {id: 1, name: 'Quang Ngoc Trinh'},
    {id: 2, name: 'Nguyen Minh T'},
    {id: 3, name: 'Pham Van B'},
    {id: 4, name: 'Pham Sinh A'},
];

let arr1 = [];

// var arr2 = arr.map((item) => arr1.push(item.name));
for(let i = 0 ; i < arr.length ; i++) {
    arr1.push(arr[i].name);
}

console.log(arr1);

