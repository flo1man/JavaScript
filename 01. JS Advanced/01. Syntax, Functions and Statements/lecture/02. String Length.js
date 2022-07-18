function getLength(first, second, third){
    let lengthSum = first.length + second.length + third.length;
    let averageLength = Math.floor(lengthSum / 3);
    console.log(lengthSum);
    console.log(averageLength);
}

getLength('chocolate', 'ice cream', 'cake');
getLength('pasta', '5', '22.3');