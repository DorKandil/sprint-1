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
var gGameOn;

function onInit() {
  gBoard = buildBoard();
  renderBoard(gBoard);
  countMain = setMinesNegsCount(gBoard);
  countMain = checkMinesNesgs(gBoard);
  gGame.isOn = true;
  console.log(gBoard);
}

function onCellClicked(elCell, i, j) {
  if (!gGame.isOn) return;
  var mine = document.querySelector(".mine");
  var elSmile = document.querySelector(".on-smile");

  elCell.classList.add("selected");

  if (gCell) {
    gCell.classList.remove("selected");
  }
  gCell = elCell;

  if (gCell === mine) {
    gCell.innerText = MINE;
    elSmile.innerText = SEDSMAILE;
    gGame.shownCount--;
  }
}

function checkGameOver() {
  if (gGame.shownCount < 0) {
    gGameOn = !gGame.isOn;

    var elSmile = document.querySelector(".on-smile");
    elSmile.innerText = OVERSMILE;
    gGame.shownCount = 3;
  }
}

function flag(ev) {}

function onSmile(el) {}

window.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);
