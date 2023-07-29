import Knight from './knight.js';

export default class Board {
  constructor() {
    this.board = this.#buildBoard();
  }

  #buildBoard() {
    const gameBoard = [];
    for (let i = 0; i < this.numberOfRows; i++) {
      const row = [];
      for (let j = 0; j < this.numberOfColumns; j++) {
        row.push('.');
      }
      gameBoard.push(row);
    }
    return gameBoard;
  }

  get numberOfRows() {
    return 8;
  }

  get numberOfColumns() {
    return 8;
  }

  showPossibleMovesInBoard(knight) {
    const gameBoardCopy = [...this.board];
    gameBoardCopy[knight.rowPosition][knight.columnPosition] = 'k';
    const possibleMoves = knight.possibleMoves(this);
    possibleMoves.forEach((possibleMove) => {
      const [row, column] = possibleMove;
      gameBoardCopy[row][column] = 'p';
    });
    this.printBoardState(gameBoardCopy);
  }

  printBoardState(board = this.board) {
    // print column indexes
    let columnIndexesStr = '  ';
    for (let i = 0; i < this.numberOfColumns; i++) {
      columnIndexesStr += i + ' ';
    }
    console.log(columnIndexesStr);

    for (let i = 0; i < this.numberOfRows; i++) {
      let rowStr = `${i} `;
      for (let j = 0; j < this.numberOfColumns; j++) {
        rowStr += `${board[i][j]} `;
      }
      console.log(rowStr);
    }
  }
}
