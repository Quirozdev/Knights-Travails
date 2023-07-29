import Board from './board.js';
import Graph from './graph.js';
import Knight from './knight.js';

const gameBoard = new Board();

const knight = new Knight(0, 6);

gameBoard.showPossibleMovesInBoard(knight);

console.log(knight.possibleMoves(gameBoard));

const graph = new Graph(gameBoard);
console.log(graph.vertices);

console.log(graph.knightMoves(0, 0, 0, 1));
/*
0 - 0
1 - 2
2 - 1
2 - 0
0 - 1
*/
