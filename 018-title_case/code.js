// Title Case
function titleCase(title, minorWords) {
    title = title.toLowerCase()
    let result = title.split(' ')
    minorWords ? minorWords = minorWords.toLowerCase().split(' ') : ''
    result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1)
    for (let i = 1; i < result.length; i++){
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1)
    }
    for (let i = 1; i < result.length; i++){
        if (minorWords){
            minorWords.map(x => {
                if (x.toLowerCase() == result[i].toLowerCase()){
                    result[i] = result[i].charAt(0).toLowerCase() + result[i].slice(1)
                }
            })
        }
    }
    return result.join(' ')
}
  


// -- Instruction
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//         // Test.assertEquals(titleCase(''), '')
//         Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
//         Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
//         Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')
//     });
// });