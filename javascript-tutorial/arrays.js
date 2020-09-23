var cars = ['BMW','VIOS', 'MEC'];// Dễ đọc dễ viết 
var carsNew = new Array('BMW', 'MEC', 'VIN');// Như cách 1 nên dùng cách 1 
var carsLast = cars[cars.length - 1];// Last element for arr
console.log(carsLast);
console.log('Arrays Cars', cars);


var points = new Array(40);// Create Array 40 elements :D ???? 
console.log('Points', points);
console.log('Cars check arrays', Array.isArray(cars));
console.log('Cars check arrays', cars instanceof Array);

console.log('toString ', cars.toString());
console.log('join ', cars.join(''));
console.log(cars);
console.log('Splice ', cars.splice(1,0,'Vinfast'));