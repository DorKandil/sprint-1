"use strict";

/*******************************/
/*Create Mat*/
/*******************************/

function createMat(ROWS, COLS) {
  const mat = [];
  for (var i = 0; i < ROWS; i++) {
    const row = [];
    for (var j = 0; j < COLS; j++) {
      row.push("");
    }
    mat.push(row);
  }
  return mat;
}
function buildBoard() {
  var board = createMat(4, 4);
  for (var i = 0; i < board.length; i++) {
    board[i] = [];
    for (var j = 0; j < board.length; j++) {
      board[i][j] = {
        minesAroundCount: 4,
        isShown: false,
        isMine: false,
        isMarked: true,
        elment: null,
      };
    }
  }

  board[0][1].isMine = true;
  board[2][3].isMine = true;

  return board;
}

function renderBoard(board) {
  var strHTML = "";
  for (var i = 0; i < board.length; i++) {
    strHTML += "<tr>";
    for (var j = 0; j < board[0].length; j++) {
      var cellClass = getClassName({ i: i, j: j });
      board[i][j].isMine ? (cellClass = `mine`) : cellClass;

      strHTML += `<td class="${cellClass}"
      onclick="cellClicked(this)"></td>`;
    }
    strHTML += "</tr>";
  }

  const elContainer = document.querySelector(".board");
  elContainer.innerHTML = strHTML;
}

function getClassName(position) {
  // {i:2 , j:5}
  const cellClass = `cell-${position.i}-${position.j}`; // 'cell-2-5'
  return cellClass;
}

function renderCell(location, value) {
  const cellSelector = "." + getClassName(location); // '.cell-2-7'
  const elCell = document.querySelector(cellSelector);
  elCell.innerHTML = value;
}

function setMinesNegsCount(board, rowIdx, colIdx) {
  var mineCount = 0;
  for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    if (i < 0 || i >= board.length) continue;
    for (var j = colIdx - 1; j <= colIdx + 1; j++) {
      if (i === rowIdx && j === colIdx) continue;
      if (j < 0 || j >= board[0].length) continue;
      var currCell = board[i][j];
      if (currCell.isMine) {
        mineCount++;
        console.log("Found", mineCount, " mine around me");
      }
    }
  }
  return mineCount;
}
