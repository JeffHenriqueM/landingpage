// components/ThemeToggle.tsx

// Indica que este é um componente que roda no navegador (no cliente)
'use client'; 

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react'; // Biblioteca de ícones simples

// Função que lida com a lógica de salvar o tema
function setInitialTheme() {
  // Tenta carregar a preferência salva ou usa a preferência do sistema operacional
  const storedTheme = localStorage.getItem('theme');
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark' || (!storedTheme && systemPreference)) {
    document.documentElement.classList.add('dark');
    return 'dark';
  }
  return 'light';
}

const ThemeToggle: React.FC = () => {
  // Estado inicial. Use 'light' como fallback até o useEffect rodar.
  const [theme, setTheme] = useState('light');

  // 1. useEffect roda apenas uma vez para definir o tema inicial
  useEffect(() => {
    setTheme(setInitialTheme());
  }, []);

  // 2. Função que muda o tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-md hover:shadow-lg transition-all duration-300 fixed top-4 right-4 z-50"
      aria-label="Alternar Tema"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;