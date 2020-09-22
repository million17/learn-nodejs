/*
JS có 2 loại scope là local và global scope
Local : Các biến khi được khai báo trong hàm thì sẽ là biến cục bộ.
*/
function local() {
    var a = 'local variable';
    console.log(a);
}
// Global : Biến được khai báo trên 1 hàm sẽ được gọi là biến toàn cầu,
//  nếu k khai báo biến mà gán trực tiếp thì sẽ tự thành biến global (toàn cầu)
var b_global = 'global';
function global() {
    b_global = 'global variable';
    console.log(b_global);
}

local();
global();

function funcTest(number) {
    return number * 2;
}
var func = 'This is call ' + funcTest(5) + ' value';
console.log(func);