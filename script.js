const playGame = () => {
    // Initialize the Game board
    let gameBoard = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
    const winningPatterns = [
        // Rows
        [[0, 0], [0, 1], [0, 2]], // Top row
        [[1, 0], [1, 1], [1, 2]], // Middle row
        [[2, 0], [2, 1], [2, 2]], // Bottom row

        // Columns
        [[0, 0], [1, 0], [2, 0]], // Left column
        [[0, 1], [1, 1], [2, 1]], // Middle column
        [[0, 2], [1, 2], [2, 2]], // Right column

        // Diagonals
        [[0, 0], [1, 1], [2, 2]], // Left-to-right diagonal
        [[0, 2], [1, 1], [2, 0]]  // Right-to-left diagonal
    ];

    //Flag to check if game is still going on
    let gameActive = true
    
    const prompt = require('prompt-sync')()
    let currentPlayer = 'X'

    // Display the Board:
    const displayGameBoard = () => {
        console.log('-----------');
        console.log(`[${gameBoard[0][0]}] [${gameBoard[0][1]}] [${gameBoard[0][2]}]`)
        console.log(`[${gameBoard[1][0]}] [${gameBoard[1][1]}] [${gameBoard[1][2]}]`)
        console.log(`[${gameBoard[2][0]}] [${gameBoard[2][1]}] [${gameBoard[2][2]}]`)
        console.log('-----------');
    }

    // Switch Turns:
    const togglePlayer = () => {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    }

    // Check for a Win:
    const checkForWin = () => {
        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];

            if (gameBoard[a[0]][a[1]] !== ' ' &&
                gameBoard[a[0]][a[1]] === gameBoard[b[0]][b[1]] &&
                gameBoard[a[0]][a[1]] === gameBoard[c[0]][c[1]]) {

                return true; // Stop the function once a winner is found
            }
        }
        return false; // No winner found
    }

    // is board full
    const isBoardFull = () => {
        for (let row of gameBoard) {
            for (let cell of row) {
                if (cell === ' ') return false
            }
        }
        return true
    }

    const newGame = () => {
        let promptForNew = prompt('Do you want to play again? y/n: ')
        if (promptForNew.toLowerCase() === "y") {
            playGame()
        } else {
            console.log('Good Bye!');
        }
    }

    // Player Moves:
    const playerMoves = () => {
        console.log(`It's ${currentPlayer} turn!!!`)

        const promptGenerator = (name) => {
            while (true) {
                const input = prompt(`Enter the ${name} Number(1-3): `)
                if (isNaN(input) || input < 1 || input > 3) {
                    console.log(`Invalid ${name} Number!`);
                } else {
                    return input
                }
            }
        }

        const rowNum = parseInt(promptGenerator('Rows'))
        const colNum = parseInt(promptGenerator('Column'))

        if (gameBoard[rowNum - 1][colNum - 1] === ' ') {
            gameBoard[rowNum - 1][colNum - 1] = currentPlayer
            displayGameBoard()
        } else {
            console.log("!.......................!");
            console.log('  The cell is Reserved  ');
            console.log("!.......................!");
            playerMoves()
        }

    }

    displayGameBoard()

    while (gameActive) {
        playerMoves()

        if (checkForWin()) {
            console.log(`Player ${currentPlayer} Wins this level...`)
            gameActive = false
            newGame()
        } else if (isBoardFull()) {
            console.log('The Game is a Draw');
            gameActive = false
            newGame()
        }

        togglePlayer()
    }
}


playGame()
