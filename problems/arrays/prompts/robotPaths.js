/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

const makeBoard = n => {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};



const robotPaths = (n) => {
  // make counter to increment
  let counter = 0;
  let board = makeBoard(n);
  // make subroutine
  const countPaths = (i, j) => {
    // for each iteration, first mark that starting square as visited
    board.togglePiece(i,j);
    // base case: I've reached the bottom right corner (5,5)
    if (i === n - 1 && j === n - 1) {
      // increment counter
      counter++;
      return;
    //recursive case: Still not at (5,5)
    } else {
      // go down (make sure it's not at the bottom, or already visited)
      if (i <= n - 2 && !board.hasBeenVisited(i + 1, j)) {
        countPaths(i + 1, j);
        // once the recursive call is done, untoggle that piece before moving on
        board.togglePiece(i + 1, j);
      }
      // go right (make sure it's not at the right edge, or already visited)
      if (j <= n - 2 && !board.hasBeenVisited(i, j + 1)) {
        countPaths(i, j + 1);
        // once the recursive call is done, untoggle that piece before moving on
        board.togglePiece(i, j + 1);
      }
      // go up (make sure it's not at the top, or already visited)
      if (i >= 1 && !board.hasBeenVisited(i - 1, j)) {
        countPaths(i - 1, j);
        // once the recursive call is done, untoggle that piece before moving on
        board.togglePiece(i - 1, j);
      }
      // go left (make sure it's not at the right edge, or already visited)
      if (j >= 1 && !board.hasBeenVisited(i, j - 1)) {
        countPaths(i, j - 1);
        // once the recursive call is done, untoggle that piece before moving on
        board.togglePiece(i, j - 1);
      }
    }
  };
  // call subroutine
  countPaths(0, 0);
  return counter;
}

// LEE'S SOLUTION: (takes longer to run)
/*
* func unvisitedNeighbors
* checks all surrounding choices for unvisited nodes
**/
// function unvisitedNeighbors(board, i, j){
//   return findNeighbors(i, j).filter(function(coordinate){
//     var row = board[coordinate[0]]
//     return Boolean(row) && row[coordinate[1]] === false
//   })
// }

// function findNeighbors(r, c) {
//   var above = [r - 1, c],
//       right = [r, c + 1],
//       left  = [r, c - 1],
//       below = [r + 1, c]

//   return [above, below, left, right]
// }

// function findPaths(n, board, i, j){
//   board = board || makeBoard(n)
//   i = i || 0
//   j = j || 0
//   // results = results || []
//   var count = 0
//   // currentPath = currentPath || []
//   var neighbors = unvisitedNeighbors(board, i, j)


//   //set current board piece to "visited"
//   board.togglePiece(i, j)
//   // currentPath.push([i, j])

//   // handle base cases
//   // if unvisited neighbors exist
//   if(i === n - 1 && j === n - 1){
//     // results.push(currentPath.slice(0))
//     count++
//   }

//   neighbors.forEach(function(neighbor){
//     count += findPaths(n, board, neighbor[0], neighbor[1])
//   })

//   // currentPath.pop()
//   board.togglePiece(i, j)

//   return count
// }



// const robotPaths = (n) => {
//   return findPaths(n)
// }

module.exports = { robotPaths };
