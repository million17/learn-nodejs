var x = 5 >>> 12;
console.log(x);
console.log('---------Bitwise--------');
function getMax(n, k) {
    let max_anb = 0;
    for( let b = n ; b > 0 ; b--) {
        for(let a = b-1 ; a > 0 ; a-- ) {
            if((a&b) < k &&(a&b) > max_anb) {
                max_anb = (a&b);
            }
        }
    }
    return max_anb;
}
console.log(getMax(5,2));
console.log(getMax(8,5));
console.log(getMax(2,2));

