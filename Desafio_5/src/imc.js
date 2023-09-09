function calcularIMC(peso, altura){
    if (altura === 0){
        return 'NaN'; //Retorna caso a altura seja 0
    }

    const alturaMetros = altura/100;

    return (peso/(alturaMetros*alturaMetros).toFixed(2));
}

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

function pesoIdealMinimo(altura){
	peso_ideal_mínimo = 18.5 * (Math.pow(altura, 2)).toFixed(2);		

    return peso_ideal_mínimo;
}

module.exports = {calcularIMC, exibirClassificacaoIMC, pesoIdealMinimo }; //Módulo responsável pela exportação da função para a coleta do teste