var str = '1234';

try {
    console.log((str.split('').reverse().join('')));
} catch (e) {
    console.log(e.message);
    console.log(str)
}

function isPositive(s) {
    if(s > 0) {
        return 'YES';
    } else {
        throw (a=== 0 ? new Error('Zero Error') : new Error("Negative Error"));
    }
}

isPositive(-2);
