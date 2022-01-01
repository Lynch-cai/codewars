// Rock Paper Scissors!
const rps = (p1, p2) => {
    if (p1 == "rock"){
        if (p2 == p1){
            return "Draw!"
        }
        else if (p2 == "paper"){
            return "Player 2 won!"
        }
        else {
            return "Player 1 won!"
        }
    }
    else if (p1 == "paper"){
        if (p2 == p1){
            return "Draw!"
        }
        else if (p2 == "scissors"){
            return "Player 2 won!"
        }
        else {
            return "Player 1 won!"
        }
    }
    else {
        if (p2 == p1){
            return "Draw!"
        }
        else if (p2 == "rock"){
            return "Player 2 won!"
        }
        else {
            return "Player 1 won!"
        }
    }
};



// -- Instruction
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!



// -- Sample Tests:
// describe('rock paper scissors', function() {
//     const getMsg = (n) => `Player ${n} won!`;
  
//     it('player 1 win', function() {
//       Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
//       Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
//       Test.assertEquals(rps('paper', 'rock'), getMsg(1));
//     });
  
//     it('player 2 win', function() {
//       Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
//       Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
//       Test.assertEquals(rps('rock', 'paper'), getMsg(2));
//     });
  
//     it('draw', function() {
//       Test.assertEquals(rps('rock', 'rock'), 'Draw!');
//       Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
//       Test.assertEquals(rps('paper', 'paper'), 'Draw!');
//     });
//   });