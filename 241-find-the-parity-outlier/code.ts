// Find The Parity Outlier
export function findOutlier(arrayOfNumbers: number[]): number {
  // INumbers.interface.ts
  interface INumbers {
    oddNumbers: number[];
    evenNumbers: number[];
  }
  
  // findOutlier.service.ts
  const OddEvenNumbers: INumbers = {
    oddNumbers: [],
    evenNumbers: []
  }
  
  const isOdd = (integer: number) => {
    return integer%2 === 0;
  }
  
  const distributeOddEvenNumbers = (arrayOfNumbers: number[], OddEvenNumbers: INumbers) => {
    arrayOfNumbers.forEach(integer => {
      if(isOdd(integer)) OddEvenNumbers.oddNumbers.push(integer)
      else OddEvenNumbers.evenNumbers.push(integer)
    })
  }
  
  const findOddEvenIntruder = (OddEvenNumbers: INumbers): number => {
    if (OddEvenNumbers.oddNumbers.length === 1) return OddEvenNumbers.oddNumbers[0]
    else return OddEvenNumbers.evenNumbers[0]
  }
  
  distributeOddEvenNumbers(arrayOfNumbers, OddEvenNumbers)
  return findOddEvenIntruder(OddEvenNumbers)
}



// -- Instruction
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)



// -- Sample Tests:
// import { assert } from 'chai';

// import { findOutlier } from './solution';

// it('Simple tests', function() {
//   assert.equal(findOutlier([0, 1, 2]), 1);
//   assert.equal(findOutlier([1, 2, 3]), 2);
//   assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
//   assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
//   assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);
// });
