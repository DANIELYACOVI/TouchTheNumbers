'use strict'

function displayTime() {
    const elTimer = document.querySelector('.timer');
    elTimer.innerHTML = state.time.toFixed(3);
    state.time += state.timeStep / 1000;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function createNumbers() {
    const numIdx = getRandomInt(0, state.nums.length);
    const num = state.nums[numIdx];
    state.nums.splice(numIdx, 1);
    return num;
}

function resetNums() {
    state.nums = [];
    for (var i = 1; i <= state.numOfCells; i++) {
        state.nums.push(i);
    }
    shuffleArray(state.nums);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
}