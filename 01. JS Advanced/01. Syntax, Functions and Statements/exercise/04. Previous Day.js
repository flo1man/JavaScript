function subtractDay(year, month, day){
    let date = new Date(`${year}-${month}-${day}`);
    date.setDate(date.getDate() - 1);

    console.log(date.toISOString());

}

subtractDay(2016, 9 , 30);
subtractDay(2016, 10 , 1);