# Desafio 5 - Teste Unitário

## 1- Criando dois novos teste funcionais

1.1 - Teste para a funcionalidade Classificação do IMC

Função exibirClassificacaoIMC

```
function exibirClassificacaoIMC(imc) {
    if (imc <= 18.5) {
        return 'Abaixo do peso';
    } else if (imc <= 24.9) {
        return 'Peso ideal (Parabéns!)';
    } else if (imc <= 29.9) {
        return 'Levemente acima do peso';
    } else if (imc <= 34.9) {
        return 'Obesidade grau 1';
    } else if (imc <= 39.9) {
        return 'Obesidade grau 2 (severa)';
    } else {
        return 'Obesidade grau 3 (mórbida)';
    }
}
```
Teste da função acima

```
it('Mostrando a classificação do IMC', () => {
    const imc = 18.5;
    const ClassicacaoEsperada = 'Abaixo do peso';
    const ClassicacaoDaFuncao = exibirClassificacaoIMC(imc);

    expect(ClassicacaoEsperada).to.equal(ClassicacaoDaFuncao);
});
```
#

1.2 - Teste para a funcionalidade Peso Ideal Mínimo

Função pesoIdealMinimo

```
function pesoIdealMinimo(altura){
	peso_ideal_mínimo = 18.5 * (Math.pow(altura, 2)).toFixed(2);		

    return peso_ideal_mínimo;
}
```

Teste da função acima

```
it('Mostrando o peso mínimo ideal', () => {
    const altura = 1.7;
    const pesoIdealMin = 18.5 * (Math.pow(altura, 2)).toFixed(2);

    const resultadoPesoIdeal = pesoIdealMinimo(altura);

    expect(resultadoPesoIdeal).to.be.equal(pesoIdealMin);
  });
```

## 2 - Exportando os módulos

Deve-se realizar a exportação dos módulos de forma conjunta

```
module.exports = {calcularIMC, exibirClassificacaoIMC, pesoIdealMinimo }; 
```