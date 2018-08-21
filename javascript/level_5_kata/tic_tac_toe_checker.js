/* https://www.codewars.com/kata/tic-tac-toe-checker/javascript
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

function isSolved(board) {
  let hasZero = false;
  function win(arr, iteration) {
    console.log(iteration, arr);
    if (arr.includes(0)) {
      hasZero = true;
      return null;
    }
    let avg = arr.reduce((a, b) => a + b) / 3;
    return avg % 1 === 0 ? avg : null;
  }
  for (let i = 0; i < 3; i++) {
    // check for horizontal win
    let horizontal = win(board[i], i);
    if (horizontal) return horizontal;

    // check for vertical win
    if (i === 0) {
      let vert = win([board[0][i], board[1][i], board[2][i]], i);
      if (vert) return vert;
    }

    // check for diagonal win if first or last value
    if (i === 0 || i === 2) {
      let diag = win([board[0][i], board[1][1], board[2][Math.abs(i - 2)]], i);
      if (diag) return diag;
    }
  }
  // check for unfinished or draw
  return hasZero ? -1 : 0;
}
