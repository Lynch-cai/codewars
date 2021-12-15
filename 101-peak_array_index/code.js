// Peak array index
function peak(arr){
    const reducer = (p, c) => p + c;
    for (let i = 1; i < arr.length-1; i++){
      if (arr.slice(0, i).reduce(reducer) == arr.slice(i+1).reduce(reducer)) {
        return i
      }
    }
    return -1
}



// -- Instruction
// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

// For example:

// --For Haskell
// peak [1,12,3,3,6,3,1] == Just 2
// peak [10,20,30,40]  == Nothing 
// The special case of an array of zeros (for instance [0,0,0,0]) will not be tested.

// More examples in the test cases.

// Good luck!

// Please also try Simple time difference



// -- Sample Tests:
// describe("Basic tests", function(){
//     Test.assertEquals(peak([1,2,3,5,3,2,1]),3);
//     Test.assertEquals(peak([1,12,3,3,6,3,1]),2);
//     Test.assertEquals(peak([10,20,30,40]),-1);
// });