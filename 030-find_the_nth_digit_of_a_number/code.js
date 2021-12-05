// Find the nth Digit of a Number
var findDigit = function(num, nth){
    num = (Math.abs(num).toString().split('')).reverse()
    if (nth > 0 && nth <= num.length){
        if (nth >= num.length){
            return Number(num[num.length-1])
        }
        else{
            return Number(num[nth-1])
        }
    }
    else if(nth <= 0){
        return -1
    }
    else{
        return 0
    }
}



// -- Instruction
// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1



// -- Sample Tests:
// describe("Test", function(){
//     it("Examples", function(){
//       Test.assertEquals(findDigit(5673, 4), 5);
//       Test.assertEquals(findDigit(129, 2), 2);
//       Test.assertEquals(findDigit(-2825, 3), 8);
//       Test.assertEquals(findDigit(-456, 4), 0);
//       Test.assertEquals(findDigit(0, 20), 0);
//       Test.assertEquals(findDigit(65, 0), -1);
//       Test.assertEquals(findDigit(24, -8), -1);
//     });
// });