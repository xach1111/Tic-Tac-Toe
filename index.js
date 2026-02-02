// Event listener for all buttons
buttons = document.querySelectorAll(".board > button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clicked);
}

// Event listener for restarting the game
document.addEventListener("click",
    function () {
        if (result === "reset") {
            reset();
        }
        else if(result !== null){
            result = "reset";
        }
    }
)

// Global variable
var board = [
    '', '', '',
    '', '', '',
    '', '', ''
];
var currentPlayer = 'X';
var result = null;

// Button on clicked
function clicked() {
    makeMove(Number(this.classList[0]));
}

function makeMove(move) {
    // If the position clicked is not filled and the game is not over
    if (board[move] === '' && result === null) {
        board[move] = currentPlayer;
        currentPlayer = (currentPlayer === 'X' ? 'O' : 'X');
        updateBoard();
    }
}

function updateBoard() {
    // Add class name to draw the X and O for each position
    for (var i = 0; i < 9; i++) {
        if (board[i] === '') {
            continue;
        }
        buttons[i].classList.add(board[i]);
    }

    // Check for a game over and store in result
    connectionSet = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (var i = 0; i < connectionSet.length; i++) {
        if (board[connectionSet[i][0]] !== '' && board[connectionSet[i][0]] === board[connectionSet[i][1]] && board[connectionSet[i][0]] === board[connectionSet[i][2]]) {
            result = i;
            // Add class name to draw winning line
            document.querySelector(`.l${result}`).style.visibility = "visible";
        }
    }
    if (result === null && !board.includes('')) {
        result = "Draw";
    }
}

//resets all variables and removes added class names
function reset() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    currentPlayer = 'X';
    result = null;
    for (var i = 0; i < 9; i++) {
        document.querySelectorAll("button")[i].classList.remove('X');
        document.querySelectorAll("button")[i].classList.remove('O')
    }
    for(var i = 0; i < 8; i++){
        document.querySelector(`.l${i}`).style.visibility = "hidden";
    }

}








