"use strict";
const MINE = "💥";
const flags = "🚩";
const SMAILE = "😊";
const SEDSMAILE = "😫";
const OVERSMILE = "😵";
const LIVE = "❤️";
const gGame = {
  isOn: false,
  shownCount: 3,
  markedCount: 0,
  secsPassed: 0,
};
// gMat;
var gBoard;
var gCell;
var countMain;
var gShownCount = 3;
var gSize = 4;
var getMat;

function onInit(bordSize) {
  gBoard = buildBoard(bordSize);
  renderBoard(gBoard);
  countMain = setMinesNegsCount(gBoard);
  gGame.isOn = true;

  console.log(gBoard);
}

function onCellClicked(elCell) {
  if (!gGame.isOn) return;

  var mine = document.querySelector(".mine");
  var elSmile = document.querySelector(".on-smile");
  var elCellPoint = elCell.firstElementChild;
  console.log(elCellPoint);
  elCell.classList.add("selected");
  elCellPoint.classList.remove("cell-hide");

  if (gCell) {
    gCell.classList.remove("selected");
    gCell = elCell;
  }

  if (elCell === mine) {
    elCell.innerText = MINE;
    elSmile.innerText = SEDSMAILE;
    gGame.shownCount--;
  }
}
function checkGameOver() {
  var elSmile = document.querySelector(".on-smile");

  if (gGame.shownCount <= 0) {
    gGame.isOn = !gGame.isOn;
    elSmile.innerText = OVERSMILE;
    gGame.shownCount = 3;
  }
}

function flag(ev) {
  console.log(ev);
  ev.innerText = flags;
}

// LOOP MAIN

// Stop - play

//
