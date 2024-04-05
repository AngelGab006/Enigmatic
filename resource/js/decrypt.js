let MatrixProd = (A, B) =>
  A.map((row, i) =>
    B[0].map((_, j) =>
      row.reduce((acc, _, n) =>
        acc + A[i][n] * B[n][j], 0
      )
    )
)
let A = [[8, 3], [2, 4], [3, 6]];
let B = [[1, 2, 3], [4, 6, 8]];
console.table(MatrixProd(B,A));