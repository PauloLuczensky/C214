const { expect } = require('chai');
const { calcularIMC, exibirClassificacaoIMC, pesoIdealMinimo } = require('../src/imc');

describe('Calculadora de IMC', () => {

  //Teste Funcional  
  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });

  //Teste Funcional da Funcionalidade Classificação do IMC
  it('Mostrando a classificação do IMC', () => {
    const imc = 18.5;
    const ClassicacaoEsperada = 'Abaixo do peso';
    const ClassicacaoDaFuncao = exibirClassificacaoIMC(imc);

    expect(ClassicacaoEsperada).to.equal(ClassicacaoDaFuncao);

  });

  //Teste Funcional da Funcionalidade pesoIdealMínimo
  it('Mostrando o peso mínimo ideal', () => {
    const altura = 1.7;
    const pesoIdealMin = 18.5 * (Math.pow(altura, 2)).toFixed(2);

    const resultadoPesoIdeal = pesoIdealMinimo(altura);

    expect(resultadoPesoIdeal).to.be.equal(pesoIdealMin);


  });


  //Teste Não-Funcional
  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });
});