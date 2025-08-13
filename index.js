const prompt = require('prompt-sync')();

(function main(){
    let n = Number(prompt('Quantas vezes votar? '));
    let candA = 0;
    let candB = 0;
    let candC = 0;

    if (isNaN(n))
        return console.log("Número inválido!");

    console.log(
        "\n",
        "\nOpções de votação disponíveis:",
        "\nCanditado A = 1",
        "\nCanditado B = 2",
        "\nCanditado C = 3",
        
        "\nSair da votação = 4\n"
    );

    for(i = 0; i < n; i++){

        let voto = Number(prompt("Em qual candidato gostaria de votar? "));

        switch(voto){
            case 1:
                console.log("Voto computado ao candidato A\n")
                candA ++;
            break;
            case 2:
                console.log("Voto computado ao candidato B\n")
                candB ++;
            break;
            case 3:
                console.log("Voto computado ao candidato C\n")
                candC ++;
            break;
            default: 
                n++;
                console.log("Voto inválido!\nTente novamente!");
            break
        }
    }
    console.log(candA, candB, candC);
})();