var strs = 'Hello, my name is my Trieu Ngo Quang';
var strs1 = 'Thai Binh City';
//method strings
console.log('Length ',strs.length);; // độ dài của string
console.log('IndexOf ', strs.indexOf('my')); // Tìm vị tri của string nào đó trong string ban đầu   
console.log('Last Index ', strs.lastIndexOf('my'));// Tìm string cuối cùng xuấn hiện trong string ban đầu

console.log('Slice', strs.slice(7,9));// cắt từ vị trí thứ 0 -> 5 trong chuỗi 
console.log('SubString', strs.substring(7,9));// như slice nhưng k được truyền giá trị âm
console.log('Substr', strs.substr(7,2));// nhưng slice nhưng params thứ 2 là độ dài của phần được lấy

console.log('Replace', strs.replace('my', 'My'));// params 1 : tìm chỗ thay đổi, params 2 gán giá trị được thay đổi vào chuỗi

console.log('Concat ', strs.concat(' ', strs1));// Noi chuoi 1 voi chuoi 2

console.log('Splip', strs.split(''));//Convert string to array;