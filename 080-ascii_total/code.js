// ASCII Total
function uniTotal(letters)
{
    if (letters.length > 0){
        let res = 0
        for (let i = 0; i < letters.length; i++){
            res += letters.charCodeAt(i)
        }
        return res
    }
    else{
        return 0
    }
}



// -- Instruction
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   console.log("no chars should return null");
  
//   Test.assertSimilar(uniTotal(""), 0);
  
//   console.log("Should work with Single Letters");
  
//   Test.assertSimilar(uniTotal("a"), 97);
//   Test.assertSimilar(uniTotal("b"), 98);
//   Test.assertSimilar(uniTotal("c"), 99);
//   Test.assertSimilar(uniTotal("d"), 100);
//   Test.assertSimilar(uniTotal("e"), 101);
  
//   console.log("should work with multiple letters");
//   Test.assertSimilar(uniTotal("aaa"), 291);
  
//   console.log("should work with sentences and spaces");
  
//   Test.assertSimilar(uniTotal("Mary Had A Little Lamb"),1873);
//     });
//   });