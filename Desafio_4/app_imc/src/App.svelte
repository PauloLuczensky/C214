<script>
  import { onMount } from 'svelte';

  let currentLanguage = 'pt'; // Defina o idioma padrão

  onMount(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      currentLanguage = storedLanguage;
    }
  });

  function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    localStorage.setItem('language', currentLanguage);
  }

  let translations = {
    pt: {
      welcome: 'Bem-vindo',
      weight: 'Peso',
      height: 'Altura',
      yourIMC: 'Seu IMC',
      classificacao: 'Classificação',
      infoWeight: 'Informação de Peso',
      basedOnYourIMC: 'Baseado no seu IMC',
      yourMinIdealWeight: 'Seu peso mínimo ideal',
      yourMaxIdealWeight: 'Seu peso máximo ideal',
      toggleLanguage: 'Alterar Idioma',
    },
    en: {
      welcome: 'Welcome',
      weight: 'Weight',
      height: 'Height',
      yourIMC: 'Your IMC',
      classificacao: 'Classification',
      infoWeight: 'Weight Information',
      basedOnYourIMC: 'Based on your IMC',
      yourMinIdealWeight: 'Your minimum ideal weight',
      yourMaxIdealWeight: 'Your maximum ideal weight',
      toggleLanguage: 'Toggle Language',
    },
  };

  let peso = 0;
  let altura = 0;
  let imc = 0;
  let classificacao = '';
  let peso_ideal_minimo = 0;
  let peso_ideal_maximo = 0;

  function calcularIMC(peso, altura) {
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

  function pesoIdeal() {
    peso_ideal_minimo = (18.5 * Math.pow(altura, 2)).toFixed(2);
    peso_ideal_maximo = (24.9 * Math.pow(altura, 2)).toFixed(2);
  }
</script>

<main>
  <button on:click={toggleLanguage}>
    {translations[currentLanguage]['toggleLanguage']}
  </button>

  <h1>{translations[currentLanguage]['welcome']}</h1>

  <label>
    {translations[currentLanguage]['weight']} (kg): <input type="number" bind:value={peso} on:input={atualizarIMC} />
  </label>
  <label>
    {translations[currentLanguage]['height']} (m): <input type="number" bind:value={altura} on:input={atualizarIMC} />
  </label>

  {#if peso && altura}
    <p class="dark-text">{translations[currentLanguage]['yourIMC']}: {imc}</p>
    <p class="dark-text">{translations[currentLanguage]['classificacao']}: {classificacao}</p>
  {/if}

  <h2>{translations[currentLanguage]['infoWeight']}</h2>
  <label>
    IMC (kg/m2): <input type="number" bind:value={imc} on:input={pesoIdeal} />
  </label>

  {#if imc}
    <p class="dark-text">{translations[currentLanguage]['basedOnYourIMC']}: {imc}</p>
    <p class="dark-text">{translations[currentLanguage]['yourMinIdealWeight']}: {peso_ideal_minimo}</p>
    <p class="dark-text">{translations[currentLanguage]['yourMaxIdealWeight']}: {peso_ideal_maximo}</p>
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
    /* Altere a URL da imagem para uma imagem válida */
    background-image: url('https://dpontanews.com.br/wp-content/uploads/2021/09/banner-1.jpg');
    background-size: cover;
  }

  h1 {
    color: #000000;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 500;
  }

  .dark-text {
    color: #000000;
    font-weight: 700;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>