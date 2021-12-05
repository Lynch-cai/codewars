// Count characters in your string
function count (str) {
    let char = new Object
    for (let i = 0; i < str.length; i++){
        char[str[i]] ? char[str[i]] += 1 : char[str[i]] = 1
    }
    return char
}



// -- Instruction
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertDeepEquals(count("aba"), { a: 2, b: 1 }); 
//   Test.assertDeepEquals(count(""), {});    
//     });
// });
  