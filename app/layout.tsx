import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; 
import './globals.css'; 

const inter = Inter({ subsets: ['latin'] });

// 1. OBJETO METADATA (CRUCIAL PARA SEO E PERFORMANCE)
export const metadata: Metadata = {
  // 1.1. TÍTULO E DESCRIÇÃO PRINCIPAIS
  title: 'Seu App iOS Revolucionário | Acesso Rápido via WhatsApp', // Título que aparece no Google e na aba
  description: 'Pare de perder tempo. A solução mais rápida e intuitiva para [Seu Nicho]. Clique agora e fale conosco para receber o link de download direto para o seu iPhone via WhatsApp.',
  
  // 1.2. OPEN GRAPH (Para WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: 'Seu App iOS Revolucionário - Acesso Imediato',
    description: 'Fale conosco e comece a usar a nova solução que vai mudar sua vida no iPhone.',
    url: 'https://seusite.com.br', // 🚨 MUDE para seu domínio real após o deploy
    siteName: 'Nome do Seu App',
    images: [
      {
        url: 'https://placehold.co/1200x630/059669/white?text=MOCKUP+DO+SEU+APP+AQUI', // Imagem de visualização no WhatsApp/Facebook
        width: 1200,
        height: 630,
        alt: 'Mockup da Tela Principal do App iOS',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  
  // 1.3. TWITTER CARDS
  twitter: {
    card: 'summary_large_image',
    title: 'Seu App iOS Revolucionário',
    description: 'Fale conosco e comece a usar a nova solução que vai mudar sua vida no iPhone.',
    creator: '@SeuUsuarioTwitter', // Opcional
    images: ['https://placehold.co/1200x630/059669/white?text=MOCKUP+DO+SEU+APP+AQUI'],
  },

  // 1.4. OUTRAS TAGS ÚTEIS
  keywords: ['App iOS', 'Aplicativo', 'Software para [Nicho]', 'Flutter', 'Produto Digital'],
  robots: 'index, follow',
};

// 2. Componente Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR"> {/* MUITO IMPORTANTE para SEO */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
