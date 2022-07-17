import React from 'react'
import './Board.css'

export default function Board() {
    let board = [
        [3, 0, 6, 5, 0, 8, 4, 0, 0],
        [5, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 7, 0, 0, 0, 0, 3, 1],
        [0, 0, 3, 0, 1, 0, 0, 8, 0],
        [9, 0, 0, 8, 6, 3, 0, 0, 5],
        [0, 5, 0, 0, 9, 0, 6, 0, 0],
        [1, 3, 0, 0, 0, 0, 2, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 4],
        [0, 0, 5, 2, 0, 6, 3, 0, 0]
      ];

      const createBoard = () => {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < 9; i++) {
          let row = []
          //Inner loop to create row
          for (let j = 0; j < 9; j++) {
            row.push(<td>{board[i][j]}</td>)
          }
          //Create the parent and add the row
          table.push(<tr>{row}</tr>)
        }
        return table
      }

    return (
        <>
        <table id = "sudoku">
            {createBoard()}
        </table>
        </>
    )
}
