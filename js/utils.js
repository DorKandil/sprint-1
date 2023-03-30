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
        minesAroundCount: 0,
        isShown: false,
        isMine: false,
        isMarked: true,
        elment: "",
      };
    }
  }

  return board;
}
function renderBoard(board) {
  var strHTML = "";
  for (var i = 0; i < board.length; i++) {
    strHTML += "<tr>";
    for (var j = 0; j < board[0].length; j++) {
      var cellClass = getClassName({ i: i, j: j });

      // get emty cell
      board[i][j].elment = Math.random() >= 0.9 ? MINE : "";
      board[i][j].elment ? (cellClass = `mine`) : cellClass;
      if (board[i][j].elment === MINE) {
        board[i][j].isMine = true;
      }
      strHTML += `<td class="${cellClass}"
      onclick="onCellClicked(this)"> 
      </td>`;
    }
    strHTML += "</tr>";
  }
  strHTML += `<button class="on-smile"  onclick="onInit()"onSmile(this)">${SMAILE}</button>`;

  strHTML += `<div class="lives">${LIVE}${gGame.shownCount}</div>`;

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
  for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    if (i < 0 || i >= board.length) continue;

    for (var j = colIdx - 1; j <= colIdx + 1; j++) {
      if (j < 0 || j >= board[i].length) continue;
      if (i === rowIdx && j === colIdx) continue;

      if (board[i][j].isMine) {
        board[i][j].minesAroundCount = 0;
      }
      board[i][j].minesAroundCount++;
      var cell = document.querySelector(`.cell-${i}-${j}`);
      console.log(cell);
      cell.innerText = +board[i][j].minesAroundCount;
    }
  }
  return board;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function checkMinesNesgs(board) {
  var curr = 0;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[i][j].isMine) {
        var numOfNegs = setMinesNegsCount(board, i, j);
      }
    }
  }
}

function sizeMat(el) {}
