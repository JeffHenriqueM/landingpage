import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';
import ThemeToggle from '@/components/ThemeToggle';
import { Home as HomeIcon, Users, Building, ShieldCheck, Factory, HardHat } from 'lucide-react'; // Adicionado Factory e HardHat para a Obra

// ⚠️ Configurações do seu CTA
const CONTACT_INFO = {
  phoneNumber: '5511999999999', // SUBSTITUA! 55 + DDD + Seu Número
  message: 'Olá! Vim da Landing Page do Villamor Tambaba e gostaria de falar sobre como me tornar sócio proprietário.',
  ctaText: 'Quero Saber Como Ser Sócio!',
};

// Componente para o Destaque da Oferta (Multipropriedade)
const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 dark:border-blue-400">
        <Icon className="text-blue-500 dark:text-blue-400 mb-3" size={32} />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
);


export default function Home() {
  // Estilo para a imagem de fundo da seção Hero (Placeholder)
  const heroBackgroundStyle = {
    backgroundImage: `url('https://placehold.co/1920x800/22c55e/white?text=FOTO+DE+FUNDO+DO+PROJETO')`, // Placeholder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    // Fundo para Claro (bg-gray-50) e Escuro (dark:bg-gray-900)
    <main className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      
      {/* Botão de alternância de tema e logo (topo) */}
      <ThemeToggle />
      <header className="w-full max-w-7xl pt-6 px-4 sm:px-10 flex justify-between items-center fixed top-0 z-40 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm">
        <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            {/* Placeholder da Logo */}
            <div className="w-8 h-8 mr-2 bg-red-600 rounded-full"></div>
            Villamor Tambaba Resort
        </div>
      </header>
      
      {/* 1. SEÇÃO HERO E CTA PRINCIPAL COM IMAGEM DE FUNDO */}
      <section 
        className="w-full text-center py-32 px-4 sm:py-40 relative" 
        style={heroBackgroundStyle}
      >
        {/* Camada de sobreposição para garantir que o texto seja legível */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div> 
        
        {/* Conteúdo centralizado */}
        <div className="relative z-10 max-w-5xl mx-auto">
             
            {/* Destaque / Localização e Prazo */}
            <p className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-3">
                NORDESTE BRASILEIRO | INAUGURAÇÃO PREVISTA: JULHO 2027
            </p>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-semibold text-red-400 mb-3">
                O PRIMEIRO RESORT NATURISTA & LIBERAL DA AMÉRICA DO SUL
            </p>

            {/* Título Principal */}
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Villamor Tambaba Resort. Viva a Liberdade Sem Limites.
            </h1>
            
            {/* Subtítulo / Proposta de Valor */}
            <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Descubra o paraíso exclusivo onde o Naturismo e o Liberalismo se encontram. Torne-se Sócio-Proprietário de uma experiência única.
            </p>

            {/* CTA CHAVE */}
            <div className="mb-8">
              <WhatsAppButton 
                phoneNumber={CONTACT_INFO.phoneNumber}
                message={CONTACT_INFO.message}
                ctaText={CONTACT_INFO.ctaText}
              />
            </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE VÍDEO EXPLICATIVO (Institucional) */}
      <section className="w-full max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Assista ao Vídeo e Conheça o Conceito do Villamor
        </h2>
        {/* Placeholder de Vídeo - Garante responsividade de 16:9 */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ paddingTop: '56.25%' }}>
          {/* Substitua o iframe pelo código de embed do seu YouTube/Vimeo aqui */}
          <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center">
            <p className="text-white text-xl p-4">
                [VÍDEO DE APRESENTAÇÃO DO RESORT AQUI]
                <br />
                (Substituir pela tag {'<iframe src="..."></iframe>'})
            </p>
          </div>
        </div>
      </section>
      
      {/* 3. SEÇÃO DE CREDIBILIDADE E FATO ÚNICO (Com Villamor) */}
      <section className="w-full bg-white dark:bg-gray-800 py-12 px-4 sm:px-10 mb-16 shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Nossa Solidez e Comunidade</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* DESTAQUE 1: Experiência e Hotel Villamor */}
                <div>
                    <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">14</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">Anos de Sucesso</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Com o Hotel Villamor já em pleno funcionamento, garantindo a solidez e a experiência do nosso grupo.</p>
                </div>
                {/* DESTAQUE 2: Comunidade */}
                <div>
                    <p className="text-5xl font-extrabold text-red-600 dark:text-red-400">+1000</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">Sócios Proprietários</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Uma comunidade exclusiva e em crescimento que já garante seu espaço de liberdade.</p>
                </div>
                {/* DESTAQUE 3: O PIONEIRISMO */}
                <div>
                    <p className="text-5xl font-extrabold text-gray-900 dark:text-white">PIONEIRO</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">América do Sul</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">O primeiro resort a unir os conceitos Naturista e Liberal do continente.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. NOVA SEÇÃO: GARANTIA DE OBRA E INFRAESTRUTURA */}
       <section className="w-full max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Garantia de Entrega: Nossa Estrutura de Obra
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
             {/* Texto sobre a Solidez da Construção */}
            <div>
                 <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 font-semibold">
                    Para garantir o prazo de Julho de 2027, investimos em autossuficiência e qualidade total na construção:
                </p>
                <div className="space-y-4">
                    <div className="flex items-center text-gray-800 dark:text-white">
                        <Factory className="text-green-500 mr-3" size={24} />
                        <span className="font-bold">Usina de Concreto Própria:</span> Reduzindo dependência de terceiros e controlando a qualidade do material-base.
                    </div>
                    <div className="flex items-center text-gray-800 dark:text-white">
                        <HardHat className="text-green-500 mr-3" size={24} />
                        <span className="font-bold">Fábrica de Blocos Própria:</span> Otimizando o cronograma de produção e garantindo o padrão de sustentabilidade.
                    </div>
                </div>
            </div>

            {/* Placeholder de Vídeo da Obra */}
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingTop: '56.25%' }}>
                 <div className="absolute top-0 left-0 w-full h-full bg-red-800 flex items-center justify-center">
                    <p className="text-white text-xl p-4">
                        [VÍDEO ATUAL DA OBRA AQUI]
                    </p>
                </div>
            </div>
        </div>
         {/* CTA para Obra */}
        <div className="text-center mt-8">
            <WhatsAppButton 
                phoneNumber={CONTACT_INFO.phoneNumber}
                message={CONTACT_INFO.message}
                ctaText="Ver o Andamento da Obra e Falar com um Consultor"
            />
        </div>
      </section>


      {/* 5. SEÇÃO DE OFERTA: MULTIPROPRIEDADE E SÓCIO */}
      <section className="w-full max-w-5xl px-4 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Modelo de Negócio Exclusivo: Multipropriedade
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
                icon={HomeIcon}
                title="Sócio-Proprietário"
                description="Você adquire uma fração imobiliária do resort, garantindo o direito de uso exclusivo em um período pré-determinado todos os anos."
            />
             <FeatureCard 
                icon={Users}
                title="Comunidade Exclusiva"
                description="Faça parte de um clube seleto. Tenha acesso a eventos, áreas de convivência e a toda a infraestrutura liberal e naturista com segurança."
            />
             <FeatureCard 
                icon={Building}
                title="Patrimônio Sólido"
                description="Invista em um bem real lastreado no sucesso de 14 anos do Hotel Villamor. Um investimento inteligente no seu lazer e patrimônio."
            />
        </div>
        
        {/* CTA Intermediário */}
        <div className="text-center mt-12">
             <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Fale agora com nosso especialista para entender as cotas disponíveis:
            </p>
            <WhatsAppButton 
                phoneNumber={CONTACT_INFO.phoneNumber}
                message={CONTACT_INFO.message}
                ctaText="Entender como Funciona a Multipropriedade"
            />
        </div>
      </section>
      
      {/* 6. GALERIA DE FOTOS DO PROJETO (Placeholders) */}
      <section className="w-full max-w-5xl px-4 pb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Galeria do Projeto (Fotos Conceituais)
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Imagem Placeholder 1 */}
            <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center text-gray-600 dark:text-gray-400 font-semibold">
                Piscina Exclusiva
            </div>
            {/* Imagem Placeholder 2 */}
            <div className="aspect-square bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center text-gray-600 dark:text-gray-400 font-semibold">
                Área de Lazer
            </div>
             {/* Imagem Placeholder 3 */}
            <div className="aspect-[4/3] bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center text-gray-600 dark:text-gray-400 font-semibold">
                Apartamento Padrão
            </div>
        </div>
      </section>

      {/* 7. CTA DE FECHAMENTO (Rodapé) */}
      <footer className="w-full bg-gray-800 dark:bg-black py-10 text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">
            Não perca a chance de fazer parte deste marco.
        </h2>
        <WhatsAppButton 
            phoneNumber={CONTACT_INFO.phoneNumber}
            message={CONTACT_INFO.message}
            ctaText="Falar com Especialista Agora"
        />
      </footer>
      
    </main>
  );
}
