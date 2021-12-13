// Scaling Squared Strings
function scale(str, k, n) {
    if (str.length > 0){
        let res = ''
        str.split('\n').map(s => {
            let index = n
            while (index > 0){
                for(let i = 0; i < s.length; i++){
                    res += s[i].split('')[0].repeat(k)
                }
                index--
                res += '\n'
            }
        })
        return res.slice(0, -1)
    }
    return ''
}



// -- Instruction
// You are given a string of n lines, each substring being n characters long. For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study the "horizontal" and the "vertical" scaling of this square of strings.

// A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

// Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.

// Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

// Example: a = "abcd\nefgh\nijkl\nmnop"
// scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
// Printed:

// abcd   ----->   aabbccdd
// efgh            aabbccdd
// ijkl            aabbccdd
// mnop            eeffgghh
//                 eeffgghh
//                 eeffgghh
//                 iijjkkll
//                 iijjkkll
//                 iijjkkll
//                 mmnnoopp
//                 mmnnoopp
//                 mmnnoopp
// Task:
// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".



// -- Sample Tests:
// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }

// describe("Scaling",function() {
//     var a = "abcd\nefgh\nijkl\nmnop";
//     var r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
//     testing(scale(a, 2, 3), r);
//     testing(scale("", 5, 5), "");
//     testing(scale("Kj\nSH", 1, 2),"Kj\nKj\nSH\nSH");
    
// })