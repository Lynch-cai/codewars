// Moving Zeros To The End
var moveZeros = function (arr) {
    let tabPos = []
    for (let i = 0; i < arr.length; i++){
        if(parseInt(arr[i]) == 0){
            tabPos.push(i)
        }
    }
    for (let i = tabPos.length-1; i >= 0; i--){
        arr.splice(tabPos[i], 1)
        arr.push(0)
    }
    return arr
}



// -- Instruction

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



// -- Sample Tests:

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(
//     JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
//     JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
//   );
//   });
//   });
  