// Math Issues
Math.round = function(number) {
    return number - parseInt(number) < 0.5 ? parseInt(number) : parseInt(number)+1
};
  
Math.ceil = function(number) {
    return number - parseInt(number) > 0 ? parseInt(number)+1 : number
};
  
Math.floor = function(number) {
    return parseInt(number)
};



// -- Instruction
// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
//   Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');
  
//   Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
//   Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');
  
//   Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
//   Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');
//     });
//   });
  

