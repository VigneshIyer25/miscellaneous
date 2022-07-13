let board = [
    [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
    [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
    [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
    [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
    [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
    [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
    [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ]
]

function isSafe(grid, row, col, num){
    for(let i = 0; i < 9; i++){
        if(grid[row][i] === num) return false;
    }

    for(let i = 0; i < 9; i++){
        if(grid[i][row] === num) return false;
    }

    let grid_row = (row/3)*3;
    let grid_col = (col/3)*3;
    for(let i = grid_row; i < grid_row+3; i++){
        for(let j = grid_col; j < grid_col+3; j++){
            if(grid[i][j] === num) return false;
        }
    }
    return true;
}

function solve(grid, row, col){
    if(row === 8 && col === 9){
        return true;
    }

    if(col === 9){
        row++;
        col = 0;
    }

    if(grid[row][col] !== 0){
        solve(grid, row, col+1);
    }

    for(let num = 1; num <= 9; num++){
        if(isSafe(grid, row, col, num)){
            grid[row][col] = num;
            if(solve(grid, row, col+1)){
                return true;
            }
        }
        grid[row][col] = 0;
    }
    return false;
}