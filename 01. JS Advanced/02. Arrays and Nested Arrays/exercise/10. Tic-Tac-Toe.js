function play(input){
    let inputArr = [...input];
    let field = [[false, false, false], [false, false, false], [false, false, false]];
    let countTaken = 0;
    let turn = 0;
    let symbol = 'X';
    

    for (let i = 0; i < inputArr.length; i++) {
        let currentIndexes = inputArr[i].split(' ');
        let idx1 = currentIndexes[0];
        let idx2 = currentIndexes[1];

        if (countTaken == 9){
            console.log('The game ended! Nobody wins :(');
            break;
        }

        if(field[idx1][idx2] != false){
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        if(turn == 0){
            symbol = 'X';
            turn++;
        }
        else{
            symbol = 'O';
            turn--;
        }

        field[idx1][idx2] = symbol;
        countTaken++;
        let flag = false;
        if(symbol === 'X'){
            for (let j = 0; j < 3; j++) {
                if(field[j][0] === 'X' && field[j][1] === 'X' && field[j][2] === 'X'){
                    console.log('Player X wins!');
                    flag = true;
                    break;
                }
            }
            for (let k = 0; k < 3; k++) {
                if(field[0][k] === 'X' && field[1][k] === 'X' && field[2][k] === 'X'){
                    console.log('Player X wins!');
                    flag = true;
                    break;
                }                
            }
            if (field[0][0] === 'X' && field[1][1] === 'X' && field[2][2] === 'X') {
                console.log('Player X wins!');
                flag = true;
                break;
            }
            if (field[2][0] === 'X' && field[1][1] === 'X' && field[0][2] === 'X') {
                console.log('Player X wins!');
                flag = true;
                break;
            }
            if(flag){
                break;
            }
        }
        else{
            for (let j = 0; j < 3; j++) {
                if(field[j][0] == 'O' && field[j][1] === 'O' && field[j][2] === 'O'){
                    console.log('Player O wins!');
                    flag = true;
                    break;
                }
            }
            for (let k = 0; k < 3; k++) {
                if(field[0][k] === 'O' && field[1][k] === 'O' && field[2][k] === 'O'){
                    console.log('Player O wins!');
                    flag = true;
                    break;
                }                
            }
            if (field[0][0] === 'O' && field[1][1] === 'O' && field[2][2] === 'O') {
                console.log('Player O wins!');
                flag = true;
                break;
            }
            if (field[2][0] === 'O' && field[1][1] === 'O' && field[0][2] === 'O') {
                console.log('Player O wins!');
                flag = true;
                break;
            }
            if(flag){
                break;
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        console.log(`${field[i][0]}\t${field[i][1]}\t${field[i][2]}`)
    }
}

play(["0 1","0 0","0 2", "2 0","1 0","1 1","1 2","2 2","2 1","0 0"]);

play(["0 0","0 0","1 1","0 1","1 2","0 2","2 2","1 2","2 2","2 1"]);

play(["0 1","0 0","0 2","2 0","1 0","1 2","1 1","2 1","2 2","0 0"]);