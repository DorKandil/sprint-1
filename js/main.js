"use strict";
const MINE = "💥";
var gBoard;
var count;
function onInit() {
  var gBoard = buildBoard();
  count = setMinesNegsCount(gBoard, 0, 0);
  renderBoard(gBoard);
  console.log(gBoard);
}
