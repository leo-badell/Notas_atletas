// Notas dos atletas
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// Método forEach aplicado com os métodos slice() e sort() como recomendado
atletas.forEach(function(atleta) {
  let notas = atleta.notas.slice().sort(function(a, b) { 
    return a - b; 
  });

  let notasIntermediarias = notas.slice(1, notas.length - 1);

  // Método reduce
  let soma = notasIntermediarias.reduce(function(total, atual) { 
    return total + atual; 
  }, 0);

  // Cálculo da media
  let media = soma / notasIntermediarias.length;

  // Imprimindo os resultados das variáveis com console.log()
  console.log(`Atleta:  ${atleta.nome}`);
  console.log(`Notas Obtidas:  ${notasIntermediarias.join(',')}`);
  console.log(`Média Válida:   ${media}\n`);
});
