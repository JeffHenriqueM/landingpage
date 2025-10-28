// global.d.ts

interface Window {
  /**
   * Função de rastreamento de conversão do Google Ads.
   * Injetada via <Script> no componente de layout ou página.
   * @param url A URL de destino para redirecionar após o log da conversão.
   * @returns boolean
   */
  gtag_report_conversion: (url: string) => boolean;
}