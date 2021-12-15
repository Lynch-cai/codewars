// Give me a Diamond
function diamond(n){
    let res = []
    if (n%2 == 1){
        for (let i = 0; i < n/2; i++){
            res.push(' '.repeat(n/2-i) + '*'.repeat(i*2+1) + '\n')
        }
        const tmp = res.slice(0)
        return (res.concat(tmp.reverse().slice(1))).join('');
    }
    else {
        return null
    }
}



// -- Instruction
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"



// -- Sample Tests:
// describe( "diamond()", function(){

//     Test.assertEquals(diamond(1), "*\n")
//     Test.assertEquals(diamond(3), " *\n***\n *\n")
//     Test.assertEquals(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
//     Test.assertEquals(diamond(2), null)
//     Test.assertEquals(diamond(-3), null)
//     Test.assertEquals(diamond(0), null)
// });
  