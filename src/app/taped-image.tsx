import React from 'react';

interface TapedImageProps {
  src?: string;
  alt?: string;
  size?: string;
  isVideo?: boolean;
  videoId?: string;
}

export function TapedImage({
  src,
  alt,
  size = 'w-full h-auto',
  isVideo = false,
  videoId,
}: TapedImageProps) {
  return (
    <div className={`relative ${size} p-4`}>
      {/* Condicional para renderizar imagen o video */}
      {isVideo ? (
        // Renderizamos el reproductor de YouTube
        <div className="w-full h-0 relative" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        // Renderizamos la imagen
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      )}
      {/* Cinta adhesiva en las esquinas */}
      <div className="absolute top-0 left-0 w-12 h-4 bg-yellow-300 rotate-[-20deg]"></div>
      <div className="absolute top-0 right-0 w-12 h-4 bg-yellow-300 rotate-[20deg]"></div>
      <div className="absolute bottom-0 left-0 w-12 h-4 bg-yellow-300 rotate-[20deg]"></div>
      <div className="absolute bottom-0 right-0 w-12 h-4 bg-yellow-300 rotate-[-20deg]"></div>
    </div>
  );
}
