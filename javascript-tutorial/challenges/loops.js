function test1(s) {
    [...s].forEach(c => 'aeiou'.includes(c) ?
    console.log(c) : null);
    [...s].forEach(c => 'aeiou'.includes(c) ?
    null : console.log(c))
}

 function test2(s) {
    const vowels = 'aeiou';
    var consonants = '';

    for (var i = 0 ; i < vowels.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
        else {
            consonants += s[i] + '\n';
        }
    }
     console.log(consonants.trim());
 }

// test1('javascriptloops');
test2('javascriptloops')
