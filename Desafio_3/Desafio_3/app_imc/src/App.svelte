<script>
	let peso = 0;
	let altura = 0;
	let imc = 0;
	let classificacao = '';
	let peso_ideal_mínimo = 0;
	let peso_ideal_máximo = 0;
	let dicasArray = [];

	function calcularIMC(peso, altura){
		return (peso / Math.pow(altura, 2)).toFixed(2);
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

	function atualizarIMC() {
        imc = calcularIMC(peso, altura);
        classificacao = exibirClassificacaoIMC(imc);
    }

	function pesoIdeal(){
		peso_ideal_mínimo = 18.5 * (Math.pow(altura, 2)).toFixed(2);	
		peso_ideal_máximo = 24.9 * (Math.pow(altura, 2)).toFixed(2);	
	}

	function abaixoPeso(){
    return [
        'Vá a um nutricionista. Para melhorar a sua alimentação.',
        'Comece a fazer atividades físicas.',
        'Faça uma caminhada para ganhar condicionamento físico.',
        'Dica extra: Vá a um endocrinologista para verificar se não há disfunção hormonal.'
    ];
	}

	function pesoideal(){
    	return ['Continue sendo esta pessoa saudável!'];
	}

	function levementeAcimaPeso(){
    	return [
        	'Comece a se alimentar melhor.',
        	'Caso você não faça atividades físicas, comece a fazer.',
        	'Assim, você logo estará na sua melhor forma.'
    	];
	}

	function obesidadeGrau1(){
		return [
			'Cuidado! Procure um nutricionista!',
			'Procure também um cardiologista para examinar seu coração.',
			'Comece a fazer exercícios como caminhada e pilates para ganhar ritmo de treino.',
			'Tente manter esta rotina saudável.'
		];
	}

	function obesidadeGrau2(){
		return [
			'Cuidado! Procure um cardiologista!',
			'Veja se o seu coração está muito prejudicado.',
			'Comece a fazer exercícios leves como caminhada e esteira para ganhar ritmo de treino.',
			'Procure um nutricionista.',
			'Consuma verduras, frutas e grãos.',
			'Tente manter esta rotina saudável.'
		];
	}

	function obesidadeGrau3(){
		return [
			'ATENÇÃO! VOCÊ CORRE RISCO DE VIDA!',
			'Procure um cardiologista!',
			'Veja se o seu coração está muito prejudicado.',
			'Comece a fazer exercícios leves como caminhada e esteira para ganhar ritmo de treino.',
			'Procure um nutricionista.',
			'Consuma verduras, frutas e grãos.',
			'Evite comidas gordurosas para não correr mais risco de vida.',
			'Tenha uma rotina saudável.',
			'Procure um ortopedista para verificar seus joelhos.'
		];
	}

	function dicas(imc){
		dicasArray = [];
		imc = parseFloat(imc);
		if (imc <= 18.5) {
			return abaixoPeso();
		} else if (imc <= 24.9) {
			return pesoideal();
		} else if (imc <= 29.9) {
			return levementeAcimaPeso();
		} else if (imc <= 34.9) {
			return obesidadeGrau1();
		} else if (imc <= 39.9) {
			return obesidadeGrau2();
		} else {
			return obesidadeGrau3();
		}
	}

	function atualizarDicas() {
    	let imcNumber = Number(imc); // Convertendo para número
    	atualizarDicasArray(imcNumber);
	}

	function atualizarDicasArray(imcNumber) {
    	dicasArray = dicas(imcNumber);
	}
	
</script>

<main>
	<h1>Calculadora de IMC</h1>
	
	<label>
		Peso (kg): <input type="number" bind:value={peso} on:input={atualizarIMC}/>
	</label>
	<label>
		Altura (m): <input type="number" bind:value={altura} on:input={atualizarIMC}/>
	</label>

	{#if peso && altura}
		<p class="dark-text">Seu IMC é {imc}</p>
		<p class="dark-text">{classificacao}</p>
	{/if}

	<h2>Informações de Peso Ideal</h2>
	<label>
		IMC (kg/m2): <input type="number" bind:value={imc} on:input={pesoIdeal}/>
	</label>

	{#if imc}
		
		<p class="dark-text">Baseado no seu IMC de {imc}</p>
		<p class="dark-text">Seu peso ideal mínimo seria de {peso_ideal_mínimo}</p>
		<p class="dark-text">Seu peso ideal máximo seria de {peso_ideal_máximo}</p>
		
	{/if}

	<h3>Dicas para ter uma vida mais saudável</h3>
  	<label>
    	IMC (kg/m2): <input type="number" bind:value={imc} on:input={atualizarDicas}/>
  	</label>

  	{#if dicasArray.length > 0}
    	<ul class="dark-text">
      	{#each dicasArray as dica}
        	<li>{dica}</li>
      	{/each}
    	</ul>
 	{/if}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 480px;
		margin: 0 auto;
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url('https://mv.com.br/storage/blog/1541342023072564c0175e07e30.jpeg'); 
        background-size: cover; 
	}

	h1 {
		color: #000000;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 500;
	}


    .dark-text {
        color: #000000; /* Cor do texto mais escura */
		font-weight: 700;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>