'use client'; // <-- OBRIGATÓRIO PARA GARANTIR A RENDERIZAÇÃO NO CLIENTE

import React from 'react';

interface VideoEmbedProps {
    videoId: string;
    title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title }) => {
    // URL otimizada do YouTube com parâmetros de controle removidos para ficar mais limpo
    const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1&rel=0&showinfo=0&autohide=1`;

    return (
        // O contêiner de proporção 16:9 que garante a responsividade
        <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ paddingTop: '56.25%' }}>
            
            {/* A tag iframe é renderizada aqui como um componente de cliente */}
            <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={videoSrc} 
                title={title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" // Boa prática de segurança
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoEmbed;
