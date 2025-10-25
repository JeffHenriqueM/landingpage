import type { Config } from 'tailwindcss';

const config: Config = {
  // ADICIONE ESTA LINHA:
  darkMode: 'class', 
  // FIM DA ADIÇÃO
  content: [
    // ... (restante do array 'content' que já existe)
  ],
  theme: {
    extend: {
      // ... (restante do objeto 'theme')
    },
  },
  plugins: [],
};

export default config;