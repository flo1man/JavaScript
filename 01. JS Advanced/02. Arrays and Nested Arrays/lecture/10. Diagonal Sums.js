function diagonalSums(matrix){
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstSum += matrix[i][i];
    }

    for (let j = 0; j < matrix[0].length; j++) {
        secondSum += matrix[matrix.length - 1 - j][j];
    }

    console.log(firstSum + ' ' + secondSum);
}

diagonalSums([[20, 40],
    [10, 60]]);

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);