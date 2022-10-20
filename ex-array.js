const clientes = [
  { name: "Guilherme H", birth: 1999, gender: "M", purchaseDays: 20 },
  { name: "Daniel H", birth: 2000, gender: "M", purchaseDays: 32 },
  { name: "Juliana H", birth: 1990, gender: "W", purchaseDays: 10 },
  { name: "Zilda H", birth: 1968, gender: "W", purchaseDays: 1 },
  { name: "Norton H", birth: 1968, gender: "M", purchaseDays: 4 },
];

let ages = [17, 52, 53, 59, 70, 85, 18, 22, 25, 26, 30, 40, 85];
console.log("llalalalak", ages);
console.log("llalalalak", ages);

// TODO - ALTERA TODOS OS VALORES DE 'AGES' EM +1
// 1º usando 'FOR'
for (let index = 0; index < ages.length; index++) {
  const element = ages[index];
  const res = element + 1; // transforma em lista somando =1 nos elementos do array
  console.log("funcionou com FOR", res);
}
// 2º usando 'MAP'
ages = ages.map((element) => element + 1);
console.log("funcionou com MAP", ages); // transforma em lista somando =1 nos elementos do array

// FILTRAR TODOS OS IMPARES E TRANSFORMALOS EM PAR
const filterAges = ages.filter((value) => value % 2 === 1); // pegando os impares
const res = filterAges.map((impares) => impares + 1); // somando +1 nos impares

console.log("Numeros impares com FILTER", ages);
console.log(
  "Numeros impares +1 com MAP / ",
  `Transformando em pares: ${filterAges}`
);

// Mudando os impares para o proximo PAR deles

// usando ifelse
const agesImpar = filterAges;
agesImpar.map((value) => {
  if (value % 2 === 1) {
    value + 1;
  } else {
    value;
  }
});
console.log("proximo par dos impares (ifelse)", agesImpar);

//USANDO O OPERADOR TERNARIO
agesImpar.map((element) => (element % 2 === 1 ? element + 1 : element));
console.log("proximo par dos impares (ternario)", agesImpar);

// CRIAR ARRAY COM TODOS OS NUMERO MENORES QUE 59

const menores = ages.filter((element) => element < 59);
console.log("Numeros menores que 59", menores);

// CRIA UM NOVO ARRAY COM VALORES MENORES QUE 31 E INCREMENTAndo +1

const menores2 = ages
  .filter((element) => element < 31) // filtrando os menores que 31
  .map((value) => value + 1); // mapeando os elementos filtrados e adicionando +1
console.log("Numeros menores que 17 e incrementando", menores2);

// RETORNA A SOMA DE TODOS VALORES MENORES QUE 70 com REDUCE
const somaMenores = ages
  .filter((element) => element < 70)
  .reduce((numAtual, proxNum) => {
    return (numAtual += proxNum);
  }, 1000);
console.log("numeros menores que 70 somados: ", somaMenores);

// VERIFICA SE DETERMINADO NUMERO ESTÁ NO ARRAY AGES
const filterNum = ages;
console.log("Numero checkando", filterNum.includes(86)); // consulta sem numero 86 no array (resposta true ou false)
console.log(
  "Numero encontrado",
  filterNum.find((v) => v === 86)
); // encontra valor igual a 86

// =======================================================================

// CONTTROLANDO O OBJETO CLIENTES

const increaseDays = clientes;
increaseDays.map((value) => (value.purchaseDays += 1));
console.log("Incrementando +1 dia no purchaseDays", increaseDays);

// PROCURAR SE TEM ALGUEM QUE NASCE EM 1999 NO "CLIENTES"

const mapClients = clientes.map((value) => value.birth).find((v) => v === 1999);
console.log("Temos clientes que nascem em 1999: ", mapClients);

// ALTERA ARRAY PARA MOSTRAR APENAS OS PRIMEIROS NOMES DOS CLIENTES
const firstName = clientes.map((value) => value.name.split(" ")[0]);
console.log("Primeiro nome dos clientes", firstName);

// RETORNA O SEXO DE TODAS AS PESSOAS DE SEXO MASCULINO
const getGender = clientes
  .filter((element) => {
    return element.gender !== "W";
  });
console.log("Trás todos do sexo masculino", getGender);

// TRAS OS INDICES COM ANO DIFERENTES DE 1968
const birthFilter = clientes
.filter(client => {
    return client.birth !== 1968;
})
console.log('birth differente of 1968: ', birthFilter);
