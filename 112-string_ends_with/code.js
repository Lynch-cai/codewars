// String ends with?
function solution(str, ending){
    return str.slice(str.length-ending.length, str.length) == ending
}



// -- Instruction
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(solution('abcde', 'cde'), true)
//   Test.assertEquals(solution('abcde', 'abc'), false)
//   });
//   });