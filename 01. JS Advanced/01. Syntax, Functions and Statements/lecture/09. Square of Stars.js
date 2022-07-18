function printRectangle(num){
    let result = '';
    for (let i = 0;i < num;i++){
        result += '* ';
    }
    for (let i = 0;i < num;i++){
        console.log(result);
    }
}

printRectangle(1);
printRectangle(5);