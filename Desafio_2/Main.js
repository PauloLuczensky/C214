const prompt = require('prompt-sync')();

class Filme {
    constructor(titulo, ano, genero, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = null;
        this.avaliacao = null;
    }

    filmeAssistido(assistido) {
        this.assistido = assistido;
    }

    avaliarFilme(avaliacao) {
        this.avaliacao = avaliacao;
    }
}

//Será criado uma lista para armazenar os filmes
const filmes = [];

let flag = true;

while (flag) {
    console.log("Bem-Vindo ao Bancos de Dados Rotten Tomatoes!");
    console.log("O que você deseja fazer hoje?");
    console.log("1 - Adicionar um novo filme");
    console.log("2 - Marcar um filme como assistido");
    console.log("3 - Avaliar um filme");
    console.log("4 - Exibir a lista de filmes");
    console.log("5 - Sair do Banco de Dados");

    const opcao = prompt("Escolha uma opção:");

    switch (opcao) {
        case "1":
            const titulo = prompt("Qual o título do filme:");
            const ano = parseInt(prompt("De que ano é o filme?"));
            const genero = prompt("Qual é o gênero do filme?");
            const duracao = parseInt(prompt("Qual é o tempo do filme em minutos?"));

            const filme = new Filme(titulo, ano, genero, duracao);
            filmes.push(filme);

            console.log("Filme adicionado!");
            break;

        case "2":
            const assistido = prompt("Você assistiu ao filme? (Digite 'true' ou 'false'): ");
            const filmeAssistido = filmes[filmes.length - 1];
            filmeAssistido.filmeAssistido(assistido === 'true');
            break;

        case "3":
            const nota = parseFloat(prompt("Dê uma nota ao filme:"));
            const filmeAvaliado = filmes[filmes.length - 1];
            filmeAvaliado.avaliarFilme(nota);
            break;

        case "4":
            console.log("A lista de filmes inseridos é a seguinte:")
            console.log(filmes);
            break;

        case "5":
            flag = false;
            console.log("Você saiu do banco! Tenha um bom dia, cinéfilo!");
            break;

        default:
            console.log("Opção inválida.");
            break;
    }
}
