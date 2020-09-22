const { text } = require("express");

var cars = ['BWM', 'MEC', 'AUDI', 'DUCATI'];
var stringTest = 'TrieuNgoQuang'
var textLoops = '';
var textForIn = '';
var textForOf = '';
// i = 0 thực thi => so sánh với độ dài của mảng => thưc hiện xử lý => tăng 1 đơn vị tiếp theo(i++)
for(var i = 0 ; i < cars.length; i++) {
    textLoops += cars[i] + '-';   
}
console.log(textLoops);
//For In
for(x in cars) {
    textForIn += cars[x] + '-';
}
console.log(textForIn);
//For of - loop string 
for(x of cars) {
    textForOf += x + '-';
}
console.log(textForOf);