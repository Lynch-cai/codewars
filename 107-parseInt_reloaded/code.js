// parseInt() reloaded
function parseInt(str) {
    let uni = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
               'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', "fifteen", 'sixteen' , 'seventeen', 'eighteen', 'nineteen'],
        dec = ['twenty' , 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        res = 0
    
    if (str == 'one million'){
      return 1000000
    }
    else{
        str = str.replace(" and", "").replace(/-/g, " ").split(' ')
        for (let i = 0; i < str.length; i++){
            //  check UNI
            for (let j = 0; j < uni.length; j++){
                if (str[i] == uni[j]){
                    if (i+1 < str.length && str[i+1] == 'hundred'){
                        res += (j+1)*100
                    }
                    else{
                        res += j+1
                    }
                }
            }
            //  check DEC
            for (let j = 0; j < dec.length; j++){
                if (str[i] == dec[j]){
                    res += (j+1)*10+10
                }
            }
            if (str[i] == 'thousand'){
                res *= 1000
            }
        }
        return res
    }
}



// -- Instruction
// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(parseInt('one'), 1);
//   Test.assertEquals(parseInt('twenty'), 20);
//   Test.assertEquals(parseInt('two hundred forty-six'), 246);
//   Test.assertEquals(parseInt("seven hundred eighty-three thousand nine hundred and nineteen"), 783919);
//     });
// });