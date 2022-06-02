// Multiplication table
export function multiplicationTable (size: number): number[][] {
  const res: number[][] = []
  for(let i = 1; i < size+1; i++) {
    const temp: number[] = []
    for(let j = 1; j < size+1; j++) {
      temp.push(j*i)
    }
    res.push(temp)
  }
  return res
}


// -- Instruction
// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


// -- Sample Tests:
// import { multiplicationTable } from './solution'
// import { assert } from 'chai'

// describe('Example Tests', () => {
//   it('should work work with example tests', () => {
//     assert.deepStrictEqual(multiplicationTable(1), [[1]])
//     assert.deepStrictEqual(multiplicationTable(2), [[1, 2], [2, 4]])
//     assert.deepStrictEqual(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
//   })
// })
