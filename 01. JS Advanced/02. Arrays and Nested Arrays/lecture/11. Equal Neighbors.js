function solve(args) {
    let counter = 0;
    for (let index = 0; index < args.length-1; index++) {  
      for (let j = 1; j < args[index].length; j++) {   
       if(args[index][j] == args[index+1][j]){
          counter++;
        }
        if(args[index][j] == args[index][j - 1]){
          counter++;
        }
      }
    }
    for (let index = 0; index < args[args.length-1].length; index++) {
      if(args[args.length-1][index] == args[args.length-1][index + 1]){
        counter++;
      }
    }
    for (let index = 0; index < args.length-1; index++) {
      if(args[index][0] == args[index+1][0]){
        counter++;
      }
    }
    console.log(counter)
    }

let flag = function(matrix, i, j){
    return i == 0 || j == 0 || matrix[i].length >= j || matrix.length >- i; 
}

solve([['2', '5', '4', '7', '0'],
['4', '5', '5', '5', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);