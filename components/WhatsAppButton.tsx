// components/WhatsAppButton.tsx
import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  ctaText: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message, ctaText }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Classes Tailwind CSS:
  const tailwindClasses = `
    inline-block 
    py-4 px-8          // Padding Y (vertical) de 4, Padding X (horizontal) de 8
    bg-green-500       // Cor de fundo do WhatsApp (verde 500)
    text-white         // Cor do texto branca
    rounded-lg         // Bordas arredondadas (maior que o "5px" anterior)
    font-extrabold     // Fonte extra negrito para destaque
    text-xl            // Tamanho da fonte grande (1.2em/20px)
    uppercase          // Texto em caixa alta
    shadow-lg          // Sombra grande (para destaque)
    hover:bg-green-600 // Efeito hover para mudar a cor ao passar o mouse
    transition-colors  // Transição suave para o efeito hover
    cursor-pointer
    no-underline       // Remove sublinhado do link
    w-full sm:w-auto   // OCUPA 100% da largura no celular, mas é automático no desktop
  `;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={tailwindClasses} // Aplicando as classes
    >
      {ctaText}
    </a>
  );
};

export default WhatsAppButton;