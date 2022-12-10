// Nine squares to choose from, only empty squares can be changed

// Game ends at nine moves or a line made by a single character
// There is only a winner if someone gets a line

// First player is always X
// Keep track of current player and insert that players character in the box



const box = document.querySelectorAll('.box')
Array.from(box).forEach(element => element.addEventListener('click', checkBox))

// Set the starting board and conditions

let currentPlayer = 'X' // X always goes first
let board = []          // empty board position
let gameOver = false    // end of game trigger when true
let moveCount = 0       // keeping track of moves for alternate game end

// Fill a box with the current turn marker only if the box is empty
function checkBox(click){

  let clickBox = click.target.classList.contains('box')

  if(clickBox && board[event.target.id] === undefined && currentPlayer === 'X' && gameOver === false){
    document.getElementById(event.target.id).innerText = currentPlayer
    board[event.target.id] = currentPlayer
    console.log(board)
    console.log(board[event.target.id])
    checkWin()
    currentPlayer = 'O'
    moveCount += 1
    console.log(moveCount)

  }else if(clickBox && board[event.target.id] === undefined && currentPlayer === 'O' && gameOver === false) {
    document.getElementById(event.target.id).innerText = currentPlayer
    board[event.target.id] = currentPlayer
    console.log(board)
    console.log(board[event.target.id])
    checkWin()
    currentPlayer = 'X'
    moveCount += 1
    console.log(moveCount)
  }
}

function checkWin() {
  let winLine = []
  const winLineFunc = ()=> winLine.forEach(elem => document.querySelector(`#\\3${elem}`).style.color = 'red')

  if ((board[0] === board[1] && board[1] === board[2] && board[0] != undefined)){
    gameOver = true
    console.log(`${currentPlayer} wins! rule 1`)
    winLine = [0,1,2]
    winLineFunc()

  }else if ((board[3] === board[4] && board[4] === board[5] && board[3] != undefined)){
    gameOver = true
    console.log(`${currentPlayer} wins! rule 2`)
    winLine = [3,4,5]
    winLineFunc()

  }else if ((board[6] === board[7] && board[7] === board[8] && board[6] != undefined)){
    gameOver = true
    console.log(`${currentPlayer} wins! rule 3`)
    winLine = [6,7,8]
    winLineFunc()

  }else if ((board[0] === board[3] && board[3] === board[6] && board[0] != undefined)){
    gameOver = true
    console.log(`${currentPlayer} wins! rule 4`)
    winLine = [0,3,6]
    winLineFunc()

  }else if ((board[1] === board[4] && board[4] === board[7] && board[1] != undefined)){
    gameOver = true
    console.log(`${currentPlayer} wins! rule 5`)
    winLine = [1,4,7]
    winLineFunc()

  }else if ((board[2] === board[5] && board[5] === board[8] && board[2] != undefined)){
    gameOver = true
    console.log(`${currentPlayer} wins! rule 6`)
    winLine = [2,5,8]
    winLineFunc()

  }else if ((board[0] === board[4] && board[4] === board[8] && board[0] != undefined)){
    gameOver = true
    console.log(`${currentPlayer} wins! rule 7`)
    winLine = [0,4,8]
    winLineFunc()

  }else if ((board[2] === board[4] && board[4] === board[6] && board[2] != undefined)){
    gameOver = true
    console.log(`${currentPlayer} wins! rule 8`)
    winLine = [2,4,6]
    winLineFunc()
  }
}









// function checkBox(click){
//   if(click.target.classList.contains('box') && click.target.innerHTML.contains('')){
//     document.querySelector('#response').innerHTML = 'Guile?<br>CORRECT! Too easy...'
//     document.querySelector('#response').style.color = 'red'
//     document.querySelector('#winner').classList.add('block')
//     document.querySelector('#winner').classList.remove('hidden')
// 	}
// }