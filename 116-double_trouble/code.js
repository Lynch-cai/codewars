// Double Trouble
function trouble(x, t){
    let notFinish = true
    let i = -1
    while (notFinish){
        i++
        if(i+1 < x.length){
            if(x[i] + x[i+1] == t){
                x = x.slice(0, i+1).concat(x.slice(i+2, x.length))
                i = -1
            }
        }
        else{
            notFinish = false
        }
    }
    return x
}



// -- Instruction
// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

// Example:

// x = [1, 2, 3, 4, 5]
// t = 3

// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

// [1, 3, 4, 5]

// Work through the array from left to right.

// Return the resulting array.



// -- Sample Tests:
// describe("Example tests",() =>{
//     Test.assertSimilar(trouble([1, 3, 5, 6, 7, 4, 3],7), [1, 3, 5, 6, 7, 4]);
//     Test.assertSimilar(trouble([4, 1, 1, 1, 4],2), [4, 1, 4]); 
//     Test.assertSimilar(trouble([2, 2, 2, 2, 2, 2], 4), [2]); 
//     Test.assertSimilar(trouble([2, 6, 2], 8), [2, 2]); 
// });