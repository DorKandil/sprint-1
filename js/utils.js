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

function renderBoard(mat, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += "<tr>";
    for (var j = 0; j < mat[0].length; j++) {
      const cell = mat[i][j];
      const className = `cell cell-${i}-${j}`;

      strHTML += `<td class="${className}">${cell}</td>`;
    }
    strHTML += "</tr>";
  }
  strHTML += "</tbody></table>";

  const elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}

function renderCell(location, value) {
  const cellSelector = "." + getClassName(location); // '.cell-2-7'
  const elCell = document.querySelector(cellSelector);
  elCell.innerHTML = value;
}

function getClassName(position) {
  // {i:2 , j:5}
  const cellClass = `cell-${position.i}-${position.j}`; // 'cell-2-5'
  return cellClass;
}
