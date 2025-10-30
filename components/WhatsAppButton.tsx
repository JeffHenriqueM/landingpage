import React from 'react';


interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  ctaText: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message, ctaText }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // FUNÇÃO PARA TRATAR O CLIQUE E ENVIAR O EVENTO DO GOOGLE ADS
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Verifica se a função de conversão por clique está carregada no browser
    // Esta função é definida no Snippet de Evento na sua page.tsx
    if (typeof window.gtag_report_conversion === 'function') {
      
      // 2. Previne o redirecionamento imediato do link <a>
      // O redirecionamento ocorrerá DENTRO da função gtag_report_conversion
      e.preventDefault(); 
      
      // 3. Chama a função do Google Ads, passando o link do WhatsApp como URL 
      // para que a função redirecione após enviar o evento de conversão.
      return window.gtag_report_conversion(whatsappLink);
      
    }
    // Se a função não estiver carregada (ex: tag bloqueada), 
    // o link <a> fará o redirecionamento normal (via href).
  };

  // Classes Tailwind CSS
  const tailwindClasses = `
    inline-block 
    py-4 px-8          
    bg-green-500       
    text-white         
    rounded-lg         
    font-extrabold     
    text-xl            
    uppercase          
    shadow-lg          
    hover:bg-green-600 
    transition-colors  
    cursor-pointer
    no-underline       
    w-full sm:w-auto   
  `;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={tailwindClasses} 
      // ⚠️ Ação para chamar o rastreamento no clique
      onClick={handleClick}
    >
      {ctaText}
    </a>
  );
};

export default WhatsAppButton;