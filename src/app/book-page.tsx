import React from 'react'

interface BookPageProps {
  content: string;
  isRightPage: boolean;
}

export function BookPage({ content, isRightPage }: BookPageProps) {
  return (
    <div 
      className={`page w-1/2 bg-white p-8 ${
        isRightPage ? 'rounded-r-lg shadow-[inset_20px_0_20px_-20px_rgba(0,0,0,0.2)]' : 
                      'rounded-l-lg shadow-[inset_-20px_0_20px_-20px_rgba(0,0,0,0.2)]'
      }`}
    >
      {content ? (
        <p className="text-gray-700">{content}</p>
      ) : (
        <p className="text-gray-400 italic">Esta página está en blanco</p>
      )}
    </div>
  )
}

