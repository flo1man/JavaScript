function solve(arr){
    let inputArr = [...arr];

    inputArr.sort(function(a, b){
        return a.length - b.length || a.localeCompare(b);
    })

    inputArr.forEach(element => console.log(element));
}

solve(['alpha', 'beta', 'gamma']);

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

solve(['test', 'Deny', 'omen', 'Default']);