//what do we need

//Game Board Config
// A way to define winning combinations, player positions,
// function  to determine/declare the winner
// Function to define players and first turn 
// A function to display a gameboard, up to date -- DONE
const gameConfig = () => {
    const board = [0,1,2,3,4,5,6,7,8];
    const winningPositions = 
        {
            one: [0,1,2],
            two: [3,4,5],
            three: [4,5,6],
            four: [0,3,6],
            five: [1,4,7],
            six: [2,5,8],
            seven: [0,4,8],
            eight: [6,4,2]
        }
    let playerXScore = 0;
    let playerXPositions = [];
    let playerOScore = 0;
    let playerOPositions = [];

    //first player funcs
    const firstPlayer = (Math.floor(Math.random() * 2) === 0) ? "X" : "O";
    if (firstPlayer === "X")  {
        playerXScore++;
    } else {
        playerOScore++;
    }
    const firstPlayerTurn = () => {
        return `The first player is ${firstPlayer}`;
    }

    let currentPlayer = firstPlayer;

    //current player if statement
    currentPlayer = (playerXScore === 1) ? currentPlayer = "X" : currentPlayer = "O"
    const playPiece = (position) => {
        if(board[position] === "X" || board[position === "O"]) {
            return `Spot taken. Choose again.`;
        } else {
            board[position] = currentPlayer;
            (currentPlayer === "X") ? playerXPositions.push(position) : playerOPositions.push(position);
        }
        currentPlayer = (currentPlayer === "X") ? "O" : "X"; // Toggle player
        const winner = checkWinner();
        if (winner) {
            console.log(`Player ${winner} has won!`);

        }
    }
    

    const checkWinner = () => {
        const winningCombinations = Object.values(winningPositions);
        for (const combination of winningCombinations) {
            if (combination.every(pos => playerXPositions.includes(pos))) {
                return 'X';
            }
            if (combination.every(pos => playerOPositions.includes(pos))) {
                return 'O';
            }
        }
        return null;
    }


     // Function to get the current player
    const getCurrentPlayer = () => currentPlayer;

    


    return { board, firstPlayerTurn, playerOPositions, playerXPositions, winningPositions, playPiece, checkWinner, currentPlayer, getCurrentPlayer};
}



const newGame = gameConfig(); 
