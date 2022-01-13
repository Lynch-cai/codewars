// Changing letters
function swap (str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    str.split('').map((x, i) => {
        vowels.map(v => {
            str = x == v ? str.substring(0, i) + v.toUpperCase() + str.substring(i+1, str.length) : str
        })
    })
    return str
}



// -- Instruction
// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.



// -- Sample Tests:
// const strictEqual = require('chai').assert.strictEqual;

// function doTest (input, expected) {
// 	const actual = swap(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Tests suite", () => {
// 	it("sample tests", () => {
// 		doTest("", "");
// 		doTest("   @@@", "   @@@");
// 		doTest("HelloWorld!", "HEllOWOrld!");
// 		doTest("Sunday", "SUndAy");
// 		doTest("Codewars", "COdEwArs");
// 		doTest("Monday", "MOndAy");
// 		doTest("Friday", "FrIdAy");
// 		doTest("abracadabra", "AbrAcAdAbrA");
// 		doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
// 		doTest("ABRACADABRA", "ABRACADABRA");
// 		doTest("aBRaCaDaBRa", "ABRACADABRA");
// 	});
// });