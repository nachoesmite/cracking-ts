export interface BTree {
  data: number;
  left: BTree | null
  right: BTree | null
}


export const getPathsWithSum = (bt: BTree | null, querySum: number, dataArray: number[] = [], paths: number[][] = []) => {
  if (bt === null) {
    return paths;
  }
  dataArray.push(bt.data);
  for (let i = dataArray.length - 1; i >=0; i--) {
    const currentSlice = dataArray.slice(i, dataArray.length);
    const currentSum = currentSlice.reduce((acc, current) => acc + current, 0);
    if (currentSum === querySum) {
      paths.push(currentSlice);
    }
  }
  getPathsWithSum(bt.left, querySum, dataArray, paths);
  getPathsWithSum(bt.right, querySum, dataArray, paths);
  dataArray.pop();
  return paths;
}