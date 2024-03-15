type Row = number[];
type Matrix = Row[];

export const rotate = (matrix: Matrix): Matrix => {
  const dimension = matrix.length;
  const maxLayer = Math.ceil(dimension/2);
  for (let layer = 0; layer < maxLayer;layer++) {
    performRotation(layer, matrix);
  }

  return matrix;
}

const performRotation = (layer: number, matrix: Matrix) =>{

  const start = 0 + layer;
  const end  = matrix.length - layer - 1;
  if (start === end) {
    return;
  }

  for (let position = start; position < end ; position++ ) {
    const top = matrix[start][position];
    const right = matrix[position][end];
    const bottom = matrix[end][end - position + layer];
    const left = matrix[end - position + layer][start];
    
    matrix[start][position] = left;
    matrix[position][end] = top;
    matrix[end][end - position + layer] = right;
    matrix[end - position + layer][start] = bottom;  
  }
}
