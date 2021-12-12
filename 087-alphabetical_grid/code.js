// Alphabetical Grid
function grid(n) {
    let res = []
    if (n > -1) {
        for (let i = 0; i < n; i++){
            res.push([])
            for (let j = 0; j < n; j++){
                res[i].push(String.fromCharCode(97+(j+i)%26))
            }
            res[i] = res[i].join(' ')
        }
        return res.join('\n')
    }
    else{
        return null
    }
}



// -- Instruction
// You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

// Examples:
// grid(4)

// a b c d
// b c d e
// c d e f
// d e f g
// grid(10)

// a b c d e f g h i j
// b c d e f g h i j k
// c d e f g h i j k l
// d e f g h i j k l m
// e f g h i j k l m n
// f g h i j k l m n o
// g h i j k l m n o p
// h i j k l m n o p q
// i j k l m n o p q r
// j k l m n o p q r s
// Notes:
// After "z" comes "a"
// If function receive N < 0 should return:
// null



// -- Sample Tests:
// const chai = require('chai');
// const assert = chai.assert;

// describe('Basic Tests', function() {
//   it('Valid tests', function() {
// //     assert.strictEqual(grid(0), '');
//     assert.strictEqual(grid(1), 'a');
//     assert.strictEqual(grid(2), 'a b\nb c');
//     assert.strictEqual(grid(4), 'a b c d\nb c d e\nc d e f\nd e f g');
//     assert.strictEqual(grid(6), 'a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k');
//   });
//   it('Invalid tests', function() {
//     assert.strictEqual(grid(-1), null);
//     assert.strictEqual(grid(-5), null);
//   });
// });