// Battle ships: Sunk damaged or not touched?
function damagedOrSunk (board, attacks){
    let shipQuantity = 0
    let shipDurabilityStart = []
    let shipDurabilityEnd = []
    let result = {
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0,
    };
    
// Get numbers/quantity of ships
    board.map(h => {
        if (Math.max(...h) > shipQuantity){
            shipQuantity = Math.max(...h)
        }
    })
    
    
// Initialize ships
    for (let i = 0; i < shipQuantity; i++){
        shipDurabilityStart[i] = [i+1, 0]
    }
    
    
// Get durability of each ship
    board.map(h => {
        h.map(shipPart => {
            for (let i = 1; i <= shipDurabilityStart.length; i++) {
            if(shipPart == i){
                shipDurabilityStart[i-1][1] += 1
            }
            }
        })
    })
    
    
// Clone durability of ship
    shipDurabilityEnd = JSON.parse(JSON.stringify(shipDurabilityStart))
    
    
// Invert Attacks "Y" direction to top to bottom instead of bottom to top
    attacks.map((a, i) => {
        a[1] = board.length - a[1]+1
    })
    
    
// Attacks starting...
    attacks.map(a => {
    for (let i = 0; i < shipDurabilityStart.length; i++){
        if ((board[a[1]-1][a[0]-1]) == i+1){
            shipDurabilityEnd[i][1] -= 1
            }
        }
    })
    
    
// Check result
    shipDurabilityEnd.map((ship, i) => {
        if (ship[1] < shipDurabilityStart[i][1]){
            if(ship[1] == 0){
                result.sunk += 1
                result.points += 1
            }
            else{
                result.damaged += 1
                result.points += 0.5
            }
        }
        else{
            result.notTouched += 1
            result.points -= 1
        }
    })
    return result
}


// -- Instruction
// Task
// Your task in the kata is to determine how many boats are sunk damaged and untouched from a set amount of attacks. You will need to create a function that takes two arguments, the playing board and the attacks.

// Example Game

// Boats are placed either horizontally, vertically or diagonally on the board. 0 represents a space not occupied by a boat. Digits 1-3 represent boats which vary in length 1-4 spaces long. There will always be at least 1 boat up to a maximum of 3 in any one game. Boat sizes and board dimentions will vary from game to game.

// Attacks
// Attacks are calculated from the bottom left, first the X coordinate then the Y. There will be at least one attack per game, and the array will not contain duplicates.

// [[2, 1], [1, 3], [4, 2]];
// First attack      `[2, 1]` = `3`
// Second attack `[1, 3]` = `0`
// Third attack     `[4, 2]` = `1`
// Function Initialization
// board = [[0,0,0,2,2,0],
//          [0,3,0,0,0,0],
//          [0,3,0,1,0,0],
//          [0,3,0,1,0,0]];
// attacks = [[2, 1], [1, 3], [4, 2]];
// damagedOrSunk(board, attacks);
// Scoring
// 1 point for every whole boat sank.
// 0.5 points for each boat hit at least once (not including boats that are sunk).
// -1 point for each whole boat that was not hit at least once.
// Sunk or Damaged
// `sunk` = all boats that are sunk
// `damaged` = all boats that have been hit at least once but not sunk
// `notTouched/not_touched` = all boats that have not been hit at least once
// Output
// You should return a hash with the following data

// `sunk`, `damaged`, `notTouched`, `points`
// Example Game Output
// In our above example..

// First attack: `boat 3` was damaged, which increases the `points` by `0.5`
// Second attack: miss nothing happens
// Third attack: `boat 1` was damaged, which increases the `points` by `0.5`
// `boat 2` was untouched so `points -1` and `notTouched +1` in Javascript/Java/C# and `not_touched +1` in Python/Ruby.
// No whole boats sank
// Return Hash
// { sunk: 0, damaged: 2 , notTouched: 1, points: 0 }



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//     // Game 1
//     var board = [ [0, 0, 1, 0],
//                     [0, 0, 1, 0],
//                     [0, 0, 1, 0] ];
                
//     var attacks = [[3, 1], [3, 2], [3, 3]];
//     var result = damagedOrSunk(board, attacks);
    
//     Test.assertEquals(result.sunk, 1, "There should be 1 ship sunk");
//     Test.assertEquals(result.damaged, 0, "There should be 0 ship damaged");
//     Test.assertEquals(result.notTouched, 0, "There should be 0 ship notTouched");
//     Test.assertEquals(result.points , 1, "there should be a 1 point score");
    
//     // Game 2
//     var board = [ [3, 0, 1],
//                     [3, 0, 1],
//                     [0, 2, 1], 
//                     [0, 2, 0] ];
    
//     var attacks = [[2, 1], [2, 2], [ 3, 2], [3, 3]]
//     var result = damagedOrSunk(board, attacks)
    
//     Test.assertEquals(result.sunk, 1, "There should be 1 ship sunk");
//     Test.assertEquals(result.damaged, 1, "There should be 1 ship damaged");
//     Test.assertEquals(result.notTouched, 1, "There should be 1 ship notTouched");
//     Test.assertEquals(result.points , 0.5, "there should be a 0.5 point score");
//     });
// });
  