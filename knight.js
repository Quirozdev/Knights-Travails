import Graph from './graph.js';

export default class Knight {
  constructor(rowPosition, columnPosition) {
    this.rowPosition = rowPosition;
    this.columnPosition = columnPosition;
  }

  possibleMoves(board) {
    const positions = [
      [this.rowPosition + 1, this.columnPosition - 2],
      [this.rowPosition + 1, this.columnPosition + 2],
      [this.rowPosition - 1, this.columnPosition - 2],
      [this.rowPosition - 1, this.columnPosition + 2],
      [this.rowPosition + 2, this.columnPosition - 1],
      [this.rowPosition + 2, this.columnPosition + 1],
      [this.rowPosition - 2, this.columnPosition - 1],
      [this.rowPosition - 2, this.columnPosition + 1],
    ];

    const possiblePositions = positions.filter((position) => {
      const [row, column] = position;
      return (
        row >= 0 &&
        row < board.numberOfRows &&
        column >= 0 &&
        column < board.numberOfColumns
      );
    });

    return possiblePositions;
  }
}
