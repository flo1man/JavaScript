function calculate(product, weight, price){
    let kg = weight / 1000.0;
    let sum = kg * price;
    console.log(`I need $${sum.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${product}.`)
}

calculate('orange', 2500, 1.80);
calculate('apple', 1563, 2.35);