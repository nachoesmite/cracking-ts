type Row = number[];
type Matrix = Row[];

export const zeroMatrix = (matrix: Matrix): Matrix => {
  const m = matrix.length;
  if (m === 0) return matrix;
  const n = matrix[0].length;
  
  const visited_rows: number[] = [];
  const visited_columns: number[] = [];

  for (let i = 0; i < m ; i++) {
    for (let j = 0; j < n; j++) {
      if (visited_rows.includes(i) || visited_columns.includes(j)) {
        continue;
      }
      if (matrix[i][j] === 0) {
        makeZero(matrix,i, j);
        visited_rows.push(i);
        visited_columns.push(j);
        if (visited_rows.length === m && visited_columns.length === n) {
          return matrix;
        }
      }
    }
  }

  return matrix;
}

const makeZero = (matrix: Matrix, i: number, j: number): Matrix => {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let rows_index = 0; rows_index < m; rows_index++) {
    matrix[rows_index][j] = 0;
  }
  for (let column_index = 0; column_index < n; column_index++) {
    matrix[i][column_index] = 0;
  }
  return matrix;
}