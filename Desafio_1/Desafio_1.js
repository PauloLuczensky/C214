class Filme{

    constructor(titulo, ano, genero, duracao, assistido, avaliacao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = null;
        this.avaliacao = null;
    }

    filmeAssistido(assistido){
        this.assistido = assistido;
    }

    avaliarFilme(avaliacao){
        this.avaliacao = avaliacao;
    }
}

//Criando os filmes
const filme1 = new Filme('Missão Impossível Protocolo Fantasma', 2014, 'Ação', 160);
const filme2 = new Filme('Como treinar o seu Dragão', 2010, 'Animação', 80);
const filme3 = new Filme('O Grande Truque', 2005, 'Suspense/Drama', 150);

//Inserindo os dados para ver se o filme foi assistido ou não
//Assistido -> true
//Não Assistido -> false
filme1.filmeAssistido(true);
filme2.filmeAssistido(true);
filme3.filmeAssistido(false);

//Inserindo a avaliação do usuário ao filme
filme1.avaliarFilme(10);
filme2.avaliarFilme(9.5);
filme3.avaliarFilme(8);

console.log('Filme 1');
console.log(`O título do filme é ${filme1.titulo}. É do ano de ${filme1.ano}.
O seu gênero é ${filme1.genero} e dura ${filme1.duracao}. A nota do filme é ${filme1.avaliacao}. 
E o filme ${filme1.avaliacao ? "foi assistido" : "não foi assistido"}`);
console.log(' ')
console.log('Filme 2');
console.log(`O título do filme é ${filme2.titulo}. É do ano de ${filme2.ano}.
O seu gênero é ${filme2.genero} e dura ${filme2.duracao}. A nota do filme é ${filme2.avaliacao}.
E o filme ${filme2.avaliacao ? "foi assistido" : "não foi assistido"}`);
console.log(' ')
console.log('Filme 3');
console.log(`O título do filme é ${filme3.titulo}. É do ano de ${filme3.ano}.
O seu gênero é ${filme3.genero} e dura ${filme3.duracao}. A nota do filme é ${filme3.avaliacao}.
E o filme ${filme3.avaliacao == true ? "foi assistido" : "não foi assistido"}`);
