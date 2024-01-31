export const checkWinner = (boardToCheck) => {
    
    const board = [...boardToCheck];
    //let boardCheck = [...boardToCheck]

    //while(boardCheck.length) board.push(boardCheck.splice(0,3))
    //Revisamos combinaciones ganadores
    for(let i = 0; i < 3; i++){
        let row = i*3
        if(board[row] && board[row] === board[row+1] && board[row] === board[row+2]){
            return board[row]
        }
        if(board[i] && board[i] === board[i+3] && board[i] === board[i+3*2]){
            return board[i]
        }
    }
    if(board[0] && board[0] === board[4] && board[0] === board[8]){
        return board[0]
    }
    if(board[2] && board[2] === board[4] && board[2] === board[6]){
        return board[2]
    }
    return null;
}
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}