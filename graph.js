import Knight from './knight.js';
import Queue from './queue.js';

export default class Graph {
  constructor(board) {
    this.vertices = new Map();
    this.buildGraph(board);
  }

  buildGraph(board, rootKnight = new Knight(0, 0)) {
    /*
    recursively fill the vertices map with the "root knight"
    and all of its possible moves, repeating the process for every move
    until there are no repeated keys (coordinates) in the map
    */
    if (
      !this.vertices.has(
        `${rootKnight.rowPosition} - ${rootKnight.columnPosition}`
      )
    ) {
      this.vertices.set(
        `${rootKnight.rowPosition} - ${rootKnight.columnPosition}`,
        []
      );
    } else {
      return;
    }

    const possibleMoves = rootKnight.possibleMoves(board);

    possibleMoves.forEach((possibleMove) => {
      const [rowPosition, colPosition] = possibleMove;
      const newKnight = new Knight(rowPosition, colPosition);
      this.vertices
        .get(`${rootKnight.rowPosition} - ${rootKnight.columnPosition}`)
        .push(`${rowPosition} - ${colPosition}`);
      this.buildGraph(board, newKnight);
    });
  }

  knightMoves(fromRow, fromColumn, toRow, toColumn) {
    const path = [];

    if (fromRow === toRow && fromColumn === toColumn) {
      path.push(`${fromRow} - ${fromColumn}`);
      return path;
    }

    const queue = new Queue();
    queue.push(`${fromRow} - ${fromColumn}`);

    while (!queue.isEmpty()) {
      const currentCoordinates = queue.pull();
      path.push(currentCoordinates);
      const move = `${toRow} - ${toColumn}`;
      const possibleMoves = this.vertices.get(currentCoordinates);
      const xd = possibleMoves.find((possibleMove) => possibleMove === move);
      if (xd) {
        path.push(xd);
        return path;
      } else {
        possibleMoves.forEach((possibleMove) => {
          const [row, col] = possibleMove.split(' - ');
          queue.push(`${row} - ${col}`);
        });
      }
    }

    return path;
  }
}
