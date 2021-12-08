// Array.diff
function arrayDiff(a, b) {
    let res = []
    a.map((x, i)=>{
        b.map(y=>{
            if (x == y){
                res.push(i)
            }
        })
    })
    for (let i = res.length-1; i >= 0; i--){
        a.splice(res[i], 1)
    }
    return a
}



// -- Instruction
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



// -- Sample Tests:
// describe("Sample tests", function() {
//     it("Should pass Sample tests", function() {
//       Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
//       Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
//       Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
//       Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
//     });
// }); 