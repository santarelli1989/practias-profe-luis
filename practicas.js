const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = (array) => {
  return array.filter((n) => n % 2 === 0);
};
console.log(numerosPares(arr));

//funcion de numeros impares

const numerosImpares = (array2) => {
  return array2.filter((n) => n % 2 === 1);
};
console.log(numerosImpares(arr));


