import React, { useState } from 'react';

// Chessboard Component
const Chessboard = () => {
  // Define the chessboard as an 8x8 grid (2D array)
  const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'], // black pieces
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'], // black pawns
    ['', '', '', '', '', '', '', ''], // empty rows
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], // white pawns
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'], // white pieces
  ];

  // Define a state variable for the board
  const [board, setBoard] = useState(initialBoard);

  // Function to render chess pieces
  const renderPiece = (piece) => {
    switch (piece) {
      case 'K':
        return '♔';
      case 'Q':
        return '♕';
      case 'R':
        return '♖';
      case 'B':
        return '♗';
      case 'N':
        return '♘';
      case 'P':
        return '♙';
      case 'k':
        return '♚';
      case 'q':
        return '♛';
      case 'r':
        return '♜';
      case 'b':
        return '♝';
      case 'n':
        return '♞';
      case 'p':
        return '♟';
      default:
        return '';
    }
  };

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {/* Render squares for each row */}
          {row.map((square, colIndex) => {
           
            return (
              <div
                key={colIndex}
                className={`square ${((rowIndex + colIndex) % 2 === 0) ? 'black' : 'white'}`}
              >
                  {renderPiece(square)}
                
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Chessboard;
