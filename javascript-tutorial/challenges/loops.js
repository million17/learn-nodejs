
 function test2(s) {
   let c = s.split('');
   let a = c.sort();
   for(let i = 0 ; i< a.length ; i++) {
       console.log(a[i])
   }
 }

test2('javascriptloops')

 function test1(s) {
     let a = 1;
     for (let i = 1 ; i <=s ; i++) {
         a *= i;
     }
     return a;
 }

 console.log( test1(4))

 function test3(s) {
    const vowels = 'aeiou';
    var result = '';

    for( var i = 0; i < s.length ; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            result += s[i] + '\n';
        }
    }
     console.log(result.trim());
 }
 test3('javascriptloops');
