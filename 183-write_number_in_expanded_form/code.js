// Write Number in Expanded Form
function expandedForm(num) {
  const temp = num.toString().split('').map(Number)
  const res = []
  temp.forEach((x, i) => {
    if (x > 0) {
      res.push(x*Math.pow(10, temp.length-i-1))
    }
  })
  return res.join(' + ')
}



// -- Instruction
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!



// -- Sample Tests:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(expandedForm(12), '10 + 2');
//     Test.assertEquals(expandedForm(42), '40 + 2');
//     Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');
//   });
// });
