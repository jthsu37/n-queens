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


/*
0[0], 0[1], 0[2], 0[3]],
1[0], 1[1], 1[2], 1[3]],
2[0], 2[1], 2[2], 2[3]],
3[0], 3[1], 3[2], 3[3]]

solution = []
storage = [0, 1, 0, 0]
var board = new Board({n: 4})
//row = this.attributes[0]
//row = this.attributes[i];
var recurse = function (row) {
  for(){
    if (this.attributes[i][j] === 0 && this.hasAnyRowConflicts === false && this.hasAnyColConflicts ===false) {
      this.attributes[i][j] = 1
      storage.push(this.attributes[i]).
    } else {
      for (var i = 1; i < n; i++)
      recurse(this.attributes[i])
    }
    solution.push(storage.slice())
  }
}
recurse(this.attributes[0])

*/

window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board ({n: n});

  var recurse = function(row) {
    if (row === n) {
      var rows = board.rows();
      solution = [];
      for (var i = 0; i < rows.length; i++) {
        solution.push(rows[i].slice());
      }
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i)
      if (!board.hasAnyRooksConflicts()) {
        recurse(row + 1);
      }
      board.togglePiece(row, i)
    }

  };
  recurse(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board ({n: n});

  var recurse = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        recurse(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  recurse(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board ({n: n});
  var solution = board.rows();

  var recurse = function(row) {
    if (row === n) {
      var rows = board.rows();
      solution = [];
      for (var i = 0; i < rows.length; i++) {
        solution.push(rows[i].slice());
      }
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i)
      if (!board.hasAnyQueensConflicts()) {
        recurse(row + 1);
      }
      board.togglePiece(row, i)
    }

  };
  recurse(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board ({n: n});

  var recurse = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        recurse(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  recurse(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
