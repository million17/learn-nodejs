const { round } = require("lodash");

switch (round(Math.random())) {
    case 1:
        console.log('Case 1');
        break;
    case 2:
        console.log('Case 2');
        break;
    default:
        console.log('Default');
}
//undefined là 1 giá trị nguyên thủy. Khi ta khai báo biến cho nó mà k có giá trị nào thì sẽ là undefined

let a = 1999;// let tạo biến cục bộ trong javascript và được gán lại
var b = 'Say Hi';// sử dụng khi những phiên bản sau es6
const c = false;// chỉ tạo 1 lần và sử dụng trong cả vòng đời của nó => k thay đổi được value
console.log(a,b,c); 
console.log(`I love you ${a}`);// `${}` viết gọn thay thế cho + chuỗi lại với nhau