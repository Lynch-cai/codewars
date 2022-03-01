// Count the divisors of a number
const getDivisorsCnt = n => {
  let count = 1
  for(let i = 1; i < n; i++){
    count += n%i === 0 ? 1 : 0
  }
  return count
}



// -- Instruction
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)



// // -- Sample Tests:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(getDivisorsCnt(1) , 1);
//     Test.assertEquals(getDivisorsCnt(10) , 4);
//     Test.assertEquals(getDivisorsCnt(11) , 2);
//     Test.assertEquals(getDivisorsCnt(54) , 8);
//   });
// });
  