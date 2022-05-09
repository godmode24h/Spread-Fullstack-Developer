function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log('Pares ' + filtraPares(meuArray));

function filtraImpares(array) {
    return array.filter(callback2);
}

function callback2(item) {
    return item % 2 !== 0;
}

console.log('Impares ' + filtraImpares(meuArray));