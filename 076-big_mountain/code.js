// Bird Mountain
var peakHeight = function(mountain) {
    let height = 0
    
    
  // check top, bottom, left, right
    const checkHeight = (i, j, searchThis) =>{
        if (i == 0 || mountain[i-1][j] == searchThis ||
            i == mountain.length-1 || mountain[i+1][j] == searchThis ||
            j == 0 || mountain[i][j-1] == searchThis ||
            j == mountain[0].length-1 || mountain[i][j+1] == searchThis
        ){
            return true
        }
        else {
            return false
        }
    }
    
    
    while (mountain.some(row => row.includes('^'))){
      height++
        for(let i = 0; i < mountain.length; i++){
            for(let j = 0; j < mountain[0].length; j++){
                if(mountain[i][j] == '^'){
                    mountain[i][j] = checkHeight(i, j, (height == 1 ? ' ' : height - 1)) ? height : '^'
                }
            }
        }
    }
    return height;
}
  


// -- Instruction
// Kata Task
// A bird flying high above a mountain range is able to estimate the height of the highest peak.

// Can you?

// Example
// The birds-eye view
// ^^^^^^
//  ^^^^^^^^
//   ^^^^^^^
//   ^^^^^
//   ^^^^^^^^^^^
//   ^^^^^^
//   ^^^^
// The bird-brain calculations
// 111111
//  1^^^^111
//   1^^^^11
//   1^^^1
//   1^^^^111111
//   1^^^11
//   1111
// 111111
//  12222111
//   12^^211
//   12^21
//   12^^2111111
//   122211
//   1111
// 111111
//  12222111
//   1233211
//   12321
//   12332111111
//   122211
//   1111
// Height = 3



// -- Sample Tests:
// describe("ExampleTests", function() {

//     var show = function(m) {
//       for (var y = 0; y < m.length; y++) {
//         console.log(m[y].join(''));
//       }
//       return m;
//     }
    
//     // ----------------------
    
//     it("ex", function() {
//       var mountain = [
//         "^^^^^^        ".split(''),
//         " ^^^^^^^^     ".split(''),
//         "  ^^^^^^^     ".split(''),
//         "  ^^^^^       ".split(''),
//         "  ^^^^^^^^^^^ ".split(''),
//         "  ^^^^^^      ".split(''),
//         "  ^^^^        ".split('')
//       ];
//       Test.assertEquals(peakHeight(show(mountain)), 3);
//     });
     
//   });