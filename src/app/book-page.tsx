import React from 'react';
import { TapedImage } from './taped-image';

interface BookPageProps {
  content:
    | string
    | {
        text?: string;
        textBold?: boolean;
        textCentered?: boolean;
        content?: string;
        contentBold?: boolean;
        contentCentered?: boolean;
        images?: {
          src?: string;
          alt?: string;
          size?: string;
          isVideo?: boolean;
          videoId?: string;
        }[];
        indexItems?: { title: string; page: number }[]; // Añadimos esta propiedad
      };
  isRightPage: boolean;
  pageNumber?: number;
  onNavigate?: (page: number) => void; // Añadimos esta propiedad
}

export function BookPage({
  content,
  isRightPage,
  pageNumber,
  onNavigate,
}: BookPageProps) {
  // Estilos para el encabezado
  const headerAlignment =
    typeof content !== 'string' && content.textCentered ? 'text-center' : 'text-left';
  const headerWeight =
    typeof content !== 'string' && content.textBold ? 'font-bold' : 'font-normal';

  // Estilos para el contenido
  const contentAlignment =
    typeof content !== 'string' && content.contentCentered ? 'text-center' : 'text-left';
  const contentWeight =
    typeof content !== 'string' && content.contentBold ? 'font-bold' : 'font-normal';

  return (
    <div
      className={`page w-1/2 bg-white p-8 flex flex-col ${
        isRightPage
          ? 'rounded-r-lg shadow-[inset_20px_0_20px_-20px_rgba(0,0,0,0.2)]'
          : 'rounded-l-lg shadow-[inset_-20px_0_20px_-20px_rgba(0,0,0,0.2)]'
      }`}
    >
      {/* Contenido de la página */}
      {typeof content === 'string' ? (
        <p className={`text-gray-700 ${headerAlignment} ${headerWeight}`}>
          {content}
        </p>
      ) : (
        <>
          {/* Encabezado */}
          {content.text && (
            <p className={`text-gray-700 mb-2 ${headerAlignment} ${headerWeight}`}>
              {content.text}
            </p>
          )}

          {/* Índice */}
          {content.indexItems && (
            <ul className="mt-4">
              {content.indexItems.map((item, index) => (
                <li key={index} className="my-2">
                  <button
                    onClick={() => onNavigate && onNavigate(item.page)}
                    className="text-blue-500 hover:underline"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Contenido principal */}
          {content.content && (
            <p className={`text-gray-700 mb-4 ${contentAlignment} ${contentWeight}`}>
              {content.content}
            </p>
          )}

          {/* Galería de imágenes */}
          {content.images && (
            <div
              className={`${
                content.images.length === 1
                  ? 'flex justify-center'
                  : 'grid grid-cols-2 gap-4'
              }`}
            >
              {content.images.map((image, index) => (
                <TapedImage
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  size={image.size}
                  isVideo={image.isVideo}
                  videoId={image.videoId}
                />
              ))}
            </div>
          )}
        </>
      )}

      {/* Número de página */}
      {pageNumber !== undefined && (
        <div className="mt-auto text-center text-gray-500">{pageNumber}</div>
      )}
    </div>
  );
}
