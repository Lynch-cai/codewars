// Remove consecutive duplicate words
const removeConsecutiveDuplicates = s => {
    s = s.split(' ')
    let res = []
    s.map((x, i) => {
       if (x !== s[i-1]) {
            res.push(x)
       }
    })
    return res.join(' ')
}



// -- Instruction
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"



// -- Sample Tests:
// describe('Example tests', () => {
//     it('should handle example case', () => {
//       Test.assertEquals(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');
//     });
// });