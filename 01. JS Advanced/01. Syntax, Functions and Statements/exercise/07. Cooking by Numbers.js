function numberFunctions(n, functions){
    let num = Number(n);
    functions.forEach(func => {
        switch (func) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num++; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.80; break;
        }
        console.log(num);
    });
}

numberFunctions('9', ['dice', 'spice', 'chop', 'bake', 'fillet']);