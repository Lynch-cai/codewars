// Multi-tap Keypad Text Entry on an Old Mobile Phone
function presses(phrase) {
    let keyboard = [[0, 2],[1, 1],[2, 4],[3, 4],[4, 4],[5, 4],[6, 4],[7, 5],[8, 4],[9, 5],["A", 1],["B", 2],["C", 3],["D", 1],["E", 2],["F", 3],["G", 1],["H", 2],["I", 3],["J", 1],["K", 2],["L", 3],["M", 1],["N", 2],["O", 3],["P", 1],["Q", 2],["R", 3],["S", 4],["T", 1],["U", 2],["V", 3],["W", 1],["X", 2],["Y", 3],["Z", 4],["*", 1],[" ", 1],["#", 1]]
    let temp = phrase.toUpperCase().split('')
    let result = 0
    for (let i = 0; i < phrase.length; i++){
        for (let j = 0; j < keyboard.length; j++){
            keyboard[j][0].toString() == temp[i].toString() ? result += keyboard[j][1] : ""
        }
    }
    return result
}



// -- Instruction
// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------
// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)



// -- Sample Tests:
// describe("Tests", () => {
//       it("test", () => {
//   Test.assertEquals(presses("LOL"), 9, "should work for simple examples")
//   Test.assertEquals(presses("HOW R U"), 13, "should work for phrases with spaces")
//       });
// });
  