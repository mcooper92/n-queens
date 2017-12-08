/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var solution = [];
  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, col);
      }
    }
  }
  solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var fact = function(num) {
    if (num === 0) { 
      return 1; 
    } else { 
      return num * fact(num - 1); 
    }
  };
  var solutionCount = fact(n); 

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solutionCounter = 0;
  var arr = [];
  var solCounter = [];
  var solution = function(board, rowIndex, colIndex, queenCounter) {
    if (rowIndex >= n) {
      solCounter.push(1);
      arr.push(board);
      console.log(board.rows());
      return;
    }
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyQueensConflicts()) {
        solution(board, rowIndex + 1, colIndex, queenCounter);
      } 
      board.togglePiece(rowIndex, i);
    }
  };
  solution(board, 0, 0, 0);
  // if (n === 0) {
  //   return [];
  // }
  // if (n === 1) {
  //   return [[1]];
  // }
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(arr[0]));
  return false;
  
  


};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCounter = 0;
  var arr = [];
  var solCounter = [];
  var solution = function(board, rowIndex, colIndex, queenCounter) {
    if (rowIndex >= n) {
      solCounter.push(1);
      arr.push(board.rows());
      return;
    }
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyQueensConflicts()) {
        solution(board, rowIndex + 1, colIndex, queenCounter);
      } 
      board.togglePiece(rowIndex, i);
    }
  };
  solution(board, 0, 0, 0);
  console.log('Number of solutions for ' + n + ' queens:', solCounter.length);
  return solCounter.length;
  
};



















