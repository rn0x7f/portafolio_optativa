import React from 'react';

interface BookCoverProps {
  title: string;
  author: string;
  isBackCover?: boolean;
}

export function BookCover({ title, author, isBackCover = false }: BookCoverProps) {
  return (
    <div className="w-full h-full bg-amber-100 flex justify-center items-center p-4">
      <div className="w-1/2 aspect-[2/3] bg-amber-700 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center relative">
        <div className="absolute inset-x-0 top-0 h-2 bg-amber-800 rounded-t-lg"></div>
        <div
          className={`absolute inset-y-0 w-2 bg-amber-600 rounded-lg shadow-inner ${
            isBackCover ? 'right-0' : 'left-0'
          }`}
        ></div>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">{title}</h1>
        <p className="text-lg md:text-xl text-amber-200">{author}</p>
        <p className="mt-8 text-amber-200 text-center">
          {isBackCover ? '' : 'Portafolio'}
        </p>
      </div>
    </div>
  );
}
