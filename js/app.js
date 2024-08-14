const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('reset');

/*---------------------------- Variables (state) ----------------------------*/

let board = ['', '', '', '', '', '', '', '', ''];
let turn = 'X';
let winner = false;
let tie = false;

/*-------------------------------- Functions --------------------------------*/

const init = () => {
  board = ['', '', '', '', '', '', '', '', ''];
  turn = 'X'; 
  winner = false;
  tie = false;
  render();
};

const render = () => {
  updateBoard();
  updateMessage();
};



const updateMessage = () => {
  if (!winner && !tie) {
    messageEl.textContent = `It's ${turn}'s turn`;
  } else if (winner) {
    messageEl.textContent = `${winner} has won!`;
  } else if (tie) {
    messageEl.textContent = "It's a tie!";
  }
};

function handleClick(event) {
  const clickedSquare = event.target;
  const squareIndex = parseInt(clickedSquare.id);

  if (board[squareIndex] !== '') return;

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

 for (let i = 0; i < winningCombos.length; i++)
  {
    const [a, b, c] = winningCombos[i];
    if (board[a] === board[b] && board[b] === board[c] && board[a]
      !== '') {
           winner = board[a]; 
           return;
    } 
  }
}

function checkForTie() {
  if (!winner && board.every(cell => cell !== '')) {
    tie = true;
  }
}

function switchPlayerTurn() {
  if (!winner) {
    turn = turn === 'X' ? 'O' : 'X';
  }
}

squareEls.forEach(square => {
  square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', init);

init();



/*----------------------------- Event Listeners -----------------------------*/


//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality




