// Replace With Alphabet Position
function alphabetPosition(text) {
    text = text.toLowerCase()
    let charCodeStart = 96
    let result = ""
    for(let i = 0; i < text.length; i++){
        if(Number(text.charCodeAt(i)) < charCodeStart+27 && Number(text.charCodeAt(i)) > charCodeStart){
            result += `${(text.charCodeAt(i) - charCodeStart).toString()} `
        }
    }
  //   Delete "space" at the end
    result = result.slice(0, -1)
    return result;
}



// -- Instruction

//   Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)



// -- Sample Tests:

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
//   Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
//     });
//   });
  