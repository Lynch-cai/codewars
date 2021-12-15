// Strip Comments
function solution(input, markers) {
    let endIndex = []
    let startIndex = [0]
    let res = ''
    for (let i = 0; i < markers.length; i++){
        for (let j = 0; j < input.length; j++){
            if (markers[i] == input[j]){
                endIndex.push(j-1)
            }
            else if (endIndex.length == startIndex.length && input[j] == '\n'){
                startIndex.push(j)
            }
        }
    }
    for (let i = 0; i < endIndex.length;i++){
        res = res.substring(0) + input.substring(startIndex[i], endIndex[i])
    }
    return res
};



// -- Instruction
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   function checkComments(input, markers, expected) {
//     var actual;
//     actual = solution(input, markers);
//     return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
//   };
  
//   checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
//   checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
//   });
// });