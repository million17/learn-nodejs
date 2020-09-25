function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0]):
            console.log('A');
            break;
        case 'bcdfg'.includes(s[0]):
            console.log('B');
            break;
        case 'hjklm'.includes(s[0]):
            console.log('C');
            break;
        default:
            console.log('D');
    }

    return letter;
}
getLetter('c');
