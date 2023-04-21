
/* Função que cria o tabuleiro */
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return  {
                row,
                column,
                apened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

/* FUnção que espalha as minas */
const spreadMines = (board, minesAmount) => {
    const rows = board.length 
    const columns = board[0].length 
    let minesPlanted = 0

    while (minesPlanted < minesAmount){
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnsSel = parseInt(Math.random() * columns, 10)

        if(!board[rowSel][columnsSel].mined){
            board[rowSel][columnsSel].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoards = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

export { createMinedBoards}