function solve(arr){
    let numbers = [];
    let num = 1;

    arr.forEach(x => {
        if(x === 'add'){
            numbers.push(num);
        }
        else{
            numbers.pop();
        }
    num++;
    });

    for (let n of numbers) {
        console.log(n);
    }
    if(numbers.length == 0){
        console.log('Empty');
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);