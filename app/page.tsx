import React from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeToggle from "@/components/ThemeToggle";
import VideoEmbed from "@/components/VideoEmbed";
import Image from "next/image";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

import {
  Home as HomeIcon,
  Users,
  Building,
  ShieldCheck,
  Factory,
  HardHat,
} from "lucide-react";
//
// ⚠️ Configurações do seu CTA
const CONTACT_INFO = {
  phoneNumber: "5583993663341", // SUBSTITUA! 55 + DDD + Seu Número
  message: "Olá! Gostaria de falar sobre como me tornar sócio proprietário.",
  ctaText: "Quero Saber Como Ser Sócio!",
};

// Componente para o Destaque da Oferta (Multipropriedade)
const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 dark:border-blue-400">
    <Icon className="text-blue-500 dark:text-blue-400 mb-3" size={32} />
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default function Home() {
  // Estilo para a imagem de fundo da seção Hero (Placeholder)
  const heroBackgroundStyle = {
    // Cor de fundo do placeholder para um cinza neutro
    backgroundImage: `url('https://www.villamortambabaresort.com.br/wp-content/uploads/2024/09/24_100_312_3DF_Villa_Aviao-party.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    // Fundo para Claro (bg-gray-50) e Escuro (dark:bg-gray-900)
    <main className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Botão de alternância de tema (mantido fixo no canto) */}
      <ThemeToggle />

      {/* 🛠️ NOVO: BARRA DE BOAS-VINDAS NO TOPO FIXO */}
      <div className="w-full bg-blue-600/10 backdrop-blur-sm text-white text-center py-2 text-sm sm:text-base font-medium fixed top-0 z-50 shadow-md">
        Bem-vindo(a) ao Villamor Tambaba Resort! Sua jornada de liberdade começa
        aqui.
      </div>

      {/* 1. SEÇÃO HERO E CTA PRINCIPAL COM IMAGEM DE FUNDO */}
      <section
        // 🛠️ MUDANÇA: Adicionado pt-10 para compensar a barra fixa do topo
        // Garantindo que a HERO comece abaixo da barra fixa.
        className="w-full text-center pt-24 pb-24 px-4 sm:pt-32 sm:pb-32 relative"
        style={heroBackgroundStyle}
      >
        {/* Camada de sobreposição para garantir que o texto seja legível */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

        {/* Conteúdo centralizado */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6 xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            PRIMEIRO RESORT NUDISTA E LIBERAL DA AMÉRICA DO SUL
          </h1>

          {/* Subtítulo / Proposta de Valor */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Um paraíso de luxo e liberdade 🥂, descubra mais sobre o Villamor
            Tambaba Resort
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

      {/* 2. SEÇÃO DE VÍDEO EXPLICATIVO (AGORA COM COMPONENTE CLIENTE) */}
      <section className="w-full max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Assista ao Vídeo e Conheça o Conceito do Villamor
        </h2>

        {/* USO DO NOVO COMPONENTE CLIENTE */}
        <VideoEmbed
          videoId="Cc3tL8KgJ4I?si=P50HsD24A0TK4jKW" // SEU ID DE VÍDEO
          title="Vídeo de Apresentação Villamor Tambaba Resort"
        />
      </section>

      {/* 3. SEÇÃO DE CREDIBILIDADE E FATO ÚNICO (Com Villamor) */}
      <section className="w-full bg-white dark:bg-gray-800 py-12 px-4 sm:px-10 mb-16 shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            GRUPO VILLAMOR
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* DESTAQUE 1: Experiência e Hotel Villamor */}
            <div>
              <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                14
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">
                Anos de Sucesso
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Com o Hotel Villamor já em pleno funcionamento, garantindo a
                solidez e a experiência do nosso grupo.
              </p>
            </div>
            {/* DESTAQUE 2: Comunidade */}
            <div>
              <p className="text-5xl font-extrabold text-red-600 dark:text-red-400">
                +1000
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">
                Sócios Proprietários
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Uma comunidade exclusiva e em crescimento que já garante seu
                espaço de liberdade.
              </p>
            </div>
            {/* DESTAQUE 3: O PIONEIRISMO */}
            <div>
              <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                PIONEIRO
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">
                na América do Sul
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                O primeiro resort nudista e liberal da américa do sul
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOVA SEÇÃO: GARANTIA DE OBRA E INFRAESTRUTURA */}
      <section className="w-full max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          PREVISÃO DE ENTREGA - JULHO/2027
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Texto sobre a Solidez da Construção */}
          <div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 font-semibold">
              Para garantir o prazo de Julho de 2027, investimos em
              autossuficiência e qualidade total na construção:
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-800 dark:text-white">
                <Factory className="text-green-500 mr-3" size={24} />
                <span className="font-bold">
                  Usina de Concreto Própria:
                </span>{" "}
                Reduzindo dependência de terceiros e controlando a qualidade do
                material-base.
              </div>
              <div className="flex items-center text-gray-800 dark:text-white">
                <HardHat className="text-green-500 mr-3" size={24} />
                <span className="font-bold">
                  Fábrica de Blocos Própria:
                </span>{" "}
                Otimizando o cronograma de produção e garantindo o padrão de
                sustentabilidade.
              </div>
            </div>
          </div>

          {/* VÍDEO DA OBRA AGORA USANDO O COMPONENTE CLIENTE */}
          <VideoEmbed
            videoId="OyGvU0SgJIc?si=wp1z9AnNbfntkYTk" // ⚠️ SUBSTITUA POR UM NOVO ID DO YOUTUBE AQUI!
            title="Vídeo de Acompanhamento da Obra Villamor Tambaba Resort"
          />

          <p className="text-center text-gray-600 dark:text-gray-400 mt-4 text-sm">
            Temos uma câmera 24h acompanhando o progresso da construção.
          </p>
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
            title="Bem escriturado"
            description="Sua fração está legalizada e pronta para uso. O registro e a escritura definitiva são opcionais, para você escolher o que se encaixa melhor no seu plano."
          />
        </div>

        {/* CTA Intermediário */}
        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Fale agora com nosso especialista para entender as cotas
            disponíveis:
          </p>
          <WhatsAppButton
            phoneNumber={CONTACT_INFO.phoneNumber}
            message={CONTACT_INFO.message}
            ctaText="Entender como Funciona a Multipropriedade"
          />
        </div>
      </section>
      {/* 5.5. SEÇÃO DE ESTILO DE VIDA: RITMO E REFÚGIO (CORRIGIDA) */}
      <section className="w-full bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Seu Ritmo, Sua Liberdade: Festa ou Paz?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            No Villamor, você escolhe. Vivemos a liberdade em 360 graus, do
            êxtase da noite à paz do campo.
          </p>

          {/* CLASSE CORRIGIDA: items-start garante que as colunas se alinhem no topo */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* LADO 1: A FESTA SEM LIMITES */}
            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-red-600 dark:text-red-400 mb-3">
                A Noite que Nunca Acaba: 18 Horas de Festa
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nossa boate é o coração pulsante da liberdade. Com DJs
                internacionais, shows exclusivos e o melhor som do Nordeste,
                garantimos que a festa dure mais de 18 horas por dia. O seu
                único limite é a sua energia.
              </p>
              <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/balada.jpeg"
                  alt="Interior da boate luxuosa e liberal do resort, com iluminação neon."
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* LADO 2: O REFÚGIO TRANQUILO (FAZENDA) */}
            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mb-3">
                Respire a Paz: O Espaço Fazenda
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Quando o corpo pedir descanso, seu refúgio é a Fazenda Villamor.
                Desfrute de cavalos, charretes, trilhas e um ambiente campestre
                sereno. Recarregue as energias em contato com a natureza antes
                de voltar para a festa.
              </p>
              <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/fazenda.png"
                  alt="Cavalos e charrete em um amplo espaço de fazenda tranquilo."
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GALERIA DE FOTOS DO PROJETO (USANDO COMPONENTE IMAGE) */}
      <section className="w-full max-w-5xl px-4 pb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Conheça Nossa Estrutura
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* FOTO 1: Piscina Exclusiva */}
          <div className="relative w-full aspect-video rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/bordainfinita.jpg"
              alt="Piscina de Borda Ifinita"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* FOTO 2: Areas de utilização*/}
          <div className="relative w-full aspect-video rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/area2.jpg"
              alt="Areas de utilização"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* FOTO 3: Festa na Florestas*/}
          <div className="relative w-full aspect-video rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/area1.jpg" //
              alt="Festa na Floresta"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* FOTO 4: Avião boate*/}
          <div className="relative w-full aspect-video rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/aviao.jpg" // ⚠️ SUBSTITUA ESTA URL!
              alt="Avião Boate"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* FOTO 5: Piscina Exclusiva */}
          <div className="relative w-full aspect-video rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/geral.jpg" // ⚠️ SUBSTITUA ESTA URL!
              alt="Piscina Exclusiva do Resort"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* FOTO 6: Bangalo */}
          <div className="relative w-full aspect-video rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/bangalo.jpg" // ⚠️ SUBSTITUA ESTA URL!
              alt="Bangalo"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* 7. CTA DE FECHAMENTO (Rodapé) */}
      <footer className="w-full bg-gray-800 dark:bg-black py-10 text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Não perca a chance de fazer parte deste seleto grupo.
        </h2>
        <WhatsAppButton
          phoneNumber={CONTACT_INFO.phoneNumber}
          message={CONTACT_INFO.message}
          ctaText="Falar com Especialista Agora"
        />
      </footer>

{/* ========================================================== */}
      {/* 🛠️ SNIPPET DE EVENTO DE CONVERSÃO POR CLIQUE DO GOOGLE ADS */}
      {/* (Define a função gtag_report_conversion para ser usada no botão) */}
      {/* ========================================================== */}
      <Script id="google-ads-click-event" strategy="afterInteractive">
        {`
          // Esta função é chamada pelo botão do WhatsApp
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url; // Redireciona APÓS o evento ser enviado
              }
            };
            gtag('event', 'conversion', {
                // Seu ID de Conversão e Rótulo
                'send_to': 'AW-16761105675/h3vsKEcQpUZEiVuqIg', 
                'event_callback': callback
            });
            return false; // Retorna false para previnir o redirecionamento imediato
          }
        `}
      </Script>
    </main>
  );
}
