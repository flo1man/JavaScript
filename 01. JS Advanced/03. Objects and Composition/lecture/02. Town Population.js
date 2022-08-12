function population(input){
    let obj = {};
    input.forEach(el => {
        let currEl = el.split(' <-> ');
        obj[currEl[0]] = Number(0);
    });

    input.forEach(el => {
       let currEl = el.split(' <-> ');
        obj[currEl[0]] += Number(currEl[1]);
    }); 

    Object.keys(obj).forEach(key => {
        console.log(`${key} : ${obj[key]}`);
      });

}

population(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

population(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);