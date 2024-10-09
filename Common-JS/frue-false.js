
/*
Truthy:
1. true
2. any (+ve, -ve) number other than 0
3. any string other than empty string
4. '0'
5. {}, []

Falsy:
1. false
2. 0
3. '' (Empty String)
4. undefined
5. Null
*/ 

const x = true;
if (x) {
    console.log('VAlue of x is truthy');
    
} else {
    console.log('value of x is falsy');
    
}


// Check falsy
const y = null;
if (!y) {
    console.log('Value is falsy');
    
}

// Chaeck ftrue
const z = ' ';
if (!!z) {
    console.log('Value is true');
    
}