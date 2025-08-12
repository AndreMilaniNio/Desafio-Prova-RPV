const prompt = require('prompt-sync')();

(function main(){
    let n = Number(prompt('Quantas vezes votar? '));
    let candA = 0;
    let candB = 0;
    let candC = 0;

    for(i = 0; i < n; i++){
        console.log(
            "\n",
            "\nCanditado A = 1",
            "\nCanditado B = 2",
            "\nCanditado C = 3",
            
            "\nSair da votação = 4\n"
        );

        let voto = Number(prompt("Em qual candidato gostaria de votar? "));

        switch(voto){
            case 1:
                console.log("Voto computado ao candidato A")
                candA ++;
            break;
            case 2:
                console.log("Voto computado ao candidato B")
                candB ++;
            break;
            case 3:
                console.log("Voto computado ao candidato C")
                candC ++;
            break;
        }
    }

    console.log(candA, candB, candC);
})();