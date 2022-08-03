function pieceOfPie(arr, target1, target2){
    let pieces = [...arr];
    let fromToArr = [];
    let startIndex = pieces.findIndex(x => x == target1);
    let endIndex = pieces.findIndex(x => x == target2);

    for (let i = startIndex; i <= endIndex; i++) {
        fromToArr.push(pieces[i]);   
    }

    console.log(fromToArr);
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie');