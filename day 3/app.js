let gameBoard = ['X', 'O', '', '', '', '', '', '', '']

let player = 'X'

let gameActive = true

const board = document.getElementById('board')
const cells = document.querySelectorAll('.cell')
const playerInfo = document.getElementById('player-info')
const playAgain = document.getElementById('play-again')

function setap() {
    gameBoard = ['', '', '', '', '', '', '', '', '']
    player = 'X'
    gameActive = true
    playerInfo.innerText = `Player: ${player}`
    cells.forEach((cell) => {
        cell.classList.remove('X')
        cell.classList.remove('O')
    })
}

function gameOver() {
    if (
        (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') ||
        (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') ||
        (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') ||
        (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') ||
        (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') ||
        (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') ||
        (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') ||
        (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') ||
        !gameBoard.some((el) => el === '')
    ) {
        playerInfo.innerText = `Player: ${player} Won!!`
        gameActive = false
        return true
    }
    return false
}

function inputCell(target, cellId) {
    gameBoard[cellId] = player
    target.classList.add(player)

    if (gameOver()) {
        return
    }

    if (player === 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
    playerInfo.innerText = `Player: ${player}`
}

function boardClick(event) {
    const cellId = Number.parseInt(event.target.getAttribute('cell-id'))
    if (Number.isNaN(cellId)) {
        return
    }
    if (gameBoard[cellId] !== '') {
        return
    }
    if (!gameActive) {
        return
    }
    inputCell(event.target, cellId)
}

setap()
board.addEventListener('click', boardClick)
playAgain.addEventListener('click', setap)