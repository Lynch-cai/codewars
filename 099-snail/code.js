// Snail
snail = function(array) {
    let res = []
    let index = 0
    
    if(array.length > 1){
        const goRight = (hTab) => {
            res.push(hTab[0+index])
            for (let i = 0+index+1; i < hTab.length-index; i++){
                res.push(hTab[i])
            }
        }
        const goBottom = (vTab) => {
            for (let i = 1+index; i < vTab.length-index; i++){
                res.push(vTab[i][array[0].length-1-index])
            }
        }
    
        const goLeft = (hTab) => {
            for (let i = hTab.length-2-index; i >= 0+index ; i--){
                res.push(hTab[i])
            }
        }
    
        const goTop = (vTab) => {
            for (let i = vTab.length-2-index; i >= 0+index+1 ; i--){
                res.push(vTab[i][index])
            }
        }
        for (let i = 0; i < array.length/2; i++){
            goRight(array[0+index])
            goBottom(array)
            goLeft(array[array.length-1-index])
            goTop(array)
            index++
        }
        return res
    }
    return array[0]
}



// -- Instruction
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertDeepEquals(snail([[]]), []);
//   Test.assertDeepEquals(snail([[1]]), [1]);
//   Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
//   Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
//   Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
//   });
// });