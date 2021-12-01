// First non-repeating character
function firstNonRepeatingLetter(s) {
    let lowercaseStr = s.toLowerCase()
    let character = ""
    let i = 0
    while (i < s.length) {
        let count = 0
        for (let j = 0; j < s.length; j++) {
            if (lowercaseStr[i] == lowercaseStr[j]){
            count++
            }
        }
        if (count == 1){
            character = s[i]
            break
        }
        i++
    }
    return character
}


// -- Instruction
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


// -- Sample Tests:
// describe('Simple Tests', function() {
//     it('should handle simple testsif (s[i] s[j]', function() {
//         Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
//         Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
//         Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
//     });
// });