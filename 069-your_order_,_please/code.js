// Your order, please
function order(words){
    if (!words.length){
        return words
    }
    else{
        let order = words.match(/[1-9]/g)
        words = words.split(' ')
        let res = []
        for (let i = 0; i < order.length; i++){
            let j = 0
            while (j < order.length){
                if (i+1 == order[j]){
                    res.push(words[j])
                    break
                }
            j++
            }
        }
    return res.join(' ')
    }
}



// -- Instruction
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""



// -- Sample Tests:
// const {assert} = require('chai');

// describe("order", () => {
//   it("should work corectly", () => {
//     assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//     assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//     assert.strictEqual(order(""), "", "empty input should return empty string" )
//   });
// });