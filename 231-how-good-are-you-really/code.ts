// How good are you really?
export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  return classPoints.reduce((p,c)=>p+c)/classPoints.length<yourPoints
}



// -- Instruction
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!



// -- Sample Tests:
// import { assert } from "chai";
// import { betterThanAverage } from "./solution";

// describe("Basic tests", () => {
//   it("betterThanAverage([2, 3], 5)", () => assert.isTrue(betterThanAverage([2, 3], 5)));
//   it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)", () => assert.isTrue(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)));
//   it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)", () => assert.isTrue(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)));
//   it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)", () => assert.isFalse(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)));
//   it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)", () => assert.isFalse(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)));
// });