// Adding Big Numbers
function add(a, b) {
    let slicedA = []
    let slicedB = []
    let res = []
  
    if (a.length > 14){
        while (a.length > 14){
            slicedA.push(a.slice(a.length - 14, a.length))
            a = a.slice(0, a.length - 14)
        }
        while (b.length > 14){
            slicedB.push(b.slice(b.length - 14, b.length))
            b = b.slice(0, b.length - 14)
        }
        slicedA.push(a.slice(0, a.length))
        slicedB.push(b.slice(0, b.length))
        slicedA.reverse()
        slicedB.reverse()
        
        let hold = 0
        for(let i = 0; i < Math.min(slicedA.length, slicedB.length);i++){
            const elementA = slicedA[slicedA.length - 1 - i]
            const elementB = slicedB[slicedB.length - 1 - i]
            let addition = Number(elementA) + Number(elementB) + hold
            hold = 0
            if (addition.toString().length > Math.max(elementA.length, elementB.length)){
                hold = 1
                addition = addition.toString().substring(1)
            }
            res.push(addition.toString())
        }
        if(slicedA.length !== slicedB.length){
            for(let i = 0; i < Math.max(slicedA.length, slicedB.length) - Math.min(slicedA.length, slicedB.length);i++){
                let tmp = slicedA.length > slicedB.length ? (Number(slicedA[i])+hold).toString() : (Number(slicedB[i])+hold).toString()
                res.push(tmp)
            } 
        }
        else{
            res.push(hold.toString())
        }
        
        return res.reverse().join('')
        }
        else {
            return (Number(a) + Number(b)).toString()
    }
}



// -- Instruction
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives



// -- Sample Tests:
// describe("Add two numbers", function(){
//     it("should pass basic tests", function() {
//       Test.assertEquals(add("1", "1"), "2");
//       Test.assertEquals(add("123", "456"), "579");
//       Test.assertEquals(add("888", "222"), "1110");
//       Test.assertEquals(add("1372", "69"), "1441");
//       Test.assertEquals(add("12", "456"), "468");
//       Test.assertEquals(add("101", "100"), "201");
//       Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
//     });
//   });