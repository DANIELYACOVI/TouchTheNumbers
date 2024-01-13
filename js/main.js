'use strict';

const colorMatch = 'lightBlue';

const state = {
    numOfCells: 0,
    nums: [],
    board: [],
    currNum: 1,
    interval: null,
    time: 0,
    timeStep: 10
}

function initGame() {
    state.currNum = 1
    state.time = 0
    resetNums()
    updateNextButton()
    displayTime()
    renderBoard()
    stopTimer()
}

function updateNextButton() {
    const elNextNumButton = document.querySelector('.next-num')

    if (state.currNum > state.numOfCells && state.currNum !== 1) {
        elNextNumButton.innerHTML = 'You WON!!'
    } else {
        elNextNumButton.innerHTML = `Next: ${state.currNum}`
    }
}

function onLevelSelect(level) {
    if(state.numOfCells === level) return
    state.numOfCells = level
    initGame()
}

function onRestart() {
    stopTimer()
    initGame()
}

function cellClicked(elCell) {
    const elCellVal = +elCell.innerText;

    if (elCellVal !== state.currNum) return

    if (state.currNum === 1) startTimer()

    if (state.currNum === state.numOfCells) stopTimer()

    state.currNum++;
    updateNextButton()
    elCell.style.backgroundColor = colorMatch
}

function stopTimer() {
    clearInterval(state.interval)
}

function startTimer() {
    state.interval = setInterval(displayTime, state.timeStep);
}

function renderBoard() {
    const elBoard = document.querySelector('.board');
    var strHtml = '';

    for (var i = 0; i < Math.sqrt(state.numOfCells); i++) {
        strHtml += '\n<tr>\n'

        for (var j = 0; j < Math.sqrt(state.numOfCells); j++) {
            const currNum = createNumbers()
            strHtml += `\t<td onclick="cellClicked(this)">${currNum}</td>\n`
        }

        strHtml += '\n</tr>\n'
    }

    elBoard.innerHTML = strHtml
}