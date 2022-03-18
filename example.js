/******************** Example 1 *************************/
/*
    ex: 4, output: 1+2+3+4 = 10
*/
// recursive solution
function sumFromZeroToNumberRecursive(number) {
    if (number < 1) {
        return number
    }
    return number+sumFromZeroToNumberRecursive(number-1)
}
//driver code
console.log(sumFromZeroToNumberRecursive(3))

// dynamic solution
function sumFromZeroToNumberDynamic(number){
    const total = [0, 1]
    for (let i = 2; i <= number; i++) {
        total.push(total[i-1]+i)
    }
    return total[number]
}
// driver code
console.log(sumFromZeroToNumberDynamic(5))

/******************** Example 2 *************************/
/*
    https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/
*/
// recursive solution
function numberOfUniquePathsRecursive(column, row){
    if (column === 1 || row === 1) {
        return 1
    }
    return (
        numberOfUniquePathsRecursive(column-1, row)+
        numberOfUniquePathsRecursive(column, row-1)
    )
}
// driver code
console.log(numberOfUniquePathsRecursive(2, 2))
// recursive solution
function numberOfUniquePathsDynamic(column, row){
    const total = Array(column).fill(0).map(el=>Array(row).fill(0))
    
    // first column
    for (let col = 0; col < column; col++) {
        total[col][0] = 1        
    }
    // first row
    for (let rw = 0; rw < row; rw++) {
        total[0][rw] = 1        
    }
    for (let i = 1; i < column; i++) {
        for (let j = 1; j < row; j++) {
            total[i][j] = total[i-1][j]+total[i][j-1]
        }
    }
    return total[column-1][row-1]
}
// driver code
console.log(numberOfUniquePathsDynamic(3, 3))
