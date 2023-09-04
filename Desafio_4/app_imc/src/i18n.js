import { init } from 'svelte-i18n';

const i18n = init({
  fallbackLocale: 'pt', // Idioma padrão (português)
  initialLocale: 'pt', // Idioma inicial (português)

  translations: 'src/lang',
});

export default i18n;
