"use client"

import React, { useState } from 'react'
import { BookPage } from './book-page'
import { BookCover } from './book-cover'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const pages = [
  ".", // Front cover
  "Contextualización",
  "Inmersión & Mockup",
  "Prototipo",
  "Pitch",
]

export default function OpenBookBackground() {
  const [currentPage, setCurrentPage] = useState(-1) // -1: front cover, -2: back cover

  const nextPage = () => {
    if (currentPage === pages.length - 2) {
      setCurrentPage(-2) // Go to back cover
    } else if (currentPage < pages.length - 2) {
      setCurrentPage(currentPage + 2)
    }
  }

  const prevPage = () => {
    if (currentPage === -2) {
      setCurrentPage(pages.length - 2) // Go to last page
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 2)
    } else if (currentPage === 0) {
      setCurrentPage(-1) // Go back to front cover
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 p-4 md:p-8">
      <div className="book-container w-full max-w-4xl aspect-[3/2] shadow-2xl relative bg-amber-100 rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          {currentPage === -1 && (
            <motion.div
              key="frontCover"
              initial={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <BookCover title="La inactividad física en México" author="Renato García Morán" notBackCover={true} />
            </motion.div>
          )}
          {currentPage === -2 && (
            <motion.div
              key="backCover"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <BookCover title="" author="" />
            </motion.div>
          )}
          {currentPage >= 0 && (
            <motion.div
              key={currentPage}
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.5 }}
              className="flex w-full h-full"
            >
              <BookPage content={pages[currentPage]} isRightPage={false} />
              <BookPage content={pages[currentPage + 1] || "Fin del libro"} isRightPage={true} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          onClick={prevPage} 
          disabled={currentPage === -1}
          className="absolute bottom-4 left-4 bg-amber-200 p-2 rounded-full disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label={currentPage === -2 ? "Volver a la última página" : "Página anterior"}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextPage} 
          disabled={currentPage === -2}
          className="absolute bottom-4 right-4 bg-amber-200 p-2 rounded-full disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label={currentPage === -1 ? "Abrir libro" : currentPage === pages.length - 2 ? "Cerrar libro" : "Página siguiente"}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

