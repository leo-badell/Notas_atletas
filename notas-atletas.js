let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
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

let nomeAtletas = 0;
let obterMedia = 0;
let notasResultado =0;

for (let i = 0; i < atletas.length; i++) {
nomeAtletas = atletas.map(function(nomes) {
    return nomes.nome
})

notasResultado = atletas.map(function(notas) {
    let total = notas.notas.slice();
    total.sort(function(a, b) {
        return a - b
    })
    return total;
})
}

for(let i= 0; i < atletas.length; i++) {
    switch (i) {
        case i:
            console.log("Atleta: " + nomeAtletas[i])
            console.log("Resultado: " + notasResultado[i])
            let notasAtletas = notasResultado[i].slice(1, notasResultado[i].length - 1);
            let soma = notasResultado.reduce(function(total, atual) {
                return total + atual
            })
            let media = soma / notasAtletas.length;
            console.log(obterMedia&{media})
            console.log(console.log("Atleta não cadastrado")
            )
    }
}