// Scrolling Text
function scrollingText(text){
    text = text.toUpperCase()
    let arr = [text]
    for (let i = 0; i < text.length-1; i++){
        text = text + text[0]
        text = text.substring(1, text.length)
        arr.push(text)
    }
    return arr
}



// -- Instruction
// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertDeepEquals(scrollingText("abc"), ["ABC","BCA","CAB"])
//     });
// });