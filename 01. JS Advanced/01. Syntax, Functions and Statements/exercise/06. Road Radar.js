function roadRadar(speed, area){
    let speedNum = Number(speed);
    let diffrence = 0;
    let maxSpeed = 0;

    switch (area) {
        case 'residential':
             maxSpeed = 20;
        diffrence = speedNum - maxSpeed;
              break;
        case 'city':
             maxSpeed = 50;
        diffrence = speedNum - maxSpeed;
         break; 
        case 'interstate':
             maxSpeed = 90;
        diffrence = speedNum - maxSpeed;
         break;
        case 'motorway':
             maxSpeed = 130;
        diffrence = speedNum - maxSpeed;
         break;
    }

    if (diffrence <= 0){
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`)
    }
    else{
        let status;
        if(diffrence <= 20){
            status = 'speeding';
        }
        else if (diffrence <= 40){
            status = 'excessive speeding';
        }
        else{
            status = 'reckless driving';
        }

        console.log(`The speed is ${diffrence} km/h faster than the allowed speed of ${maxSpeed} - ${status}`)
    }
}

roadRadar(21, 'residential');