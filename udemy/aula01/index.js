const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let imc;
imc = peso / (alturaEmM * alturaEmM);

let anoNascimento;
anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade, pesa ${peso} kg, nascido em ${anoNascimento}`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);