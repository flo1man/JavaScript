function wordUppercase(input){
    const regexp = '[A-Za-z]+';
    const str = String(input);

const array = [...str.matchAll(regexp)];

console.log(array.join(', ').toUpperCase());

}

wordUppercase('Hi, how are you?');