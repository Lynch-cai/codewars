// Grasshopper - Personalized Message
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`



// -- Instruction
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'



// -- Sample Tests:
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
//   });
// });
