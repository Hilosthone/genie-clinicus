// src/components/home/Gallery.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Maximize2, X, Info } from 'lucide-react'

export const PHOTOS = [
  { src: '/GC-a.jpeg', alt: 'The Beginning of the End', category: 'Milestone' },
  { src: '/GC-b.jpeg', alt: 'Clinical Excellence', category: 'Clinical' },
  { src: '/GC-c.jpeg', alt: 'Class of 2025 Portraits', category: 'Portraits' },
  { src: '/GC-d.jpeg', alt: 'Committee Strategic Session', category: 'Event' },
  { src: '/GC-e.jpeg', alt: 'Grand Milestone Moments', category: 'Milestone' },
  { src: '/GC-f.jpeg', alt: 'Ward Round Memories', category: 'Clinical' },
  { src: '/GC-g.jpeg', alt: 'The Final Lap Preparation', category: 'Event' },
  { src: '/GC-h.jpeg', alt: 'Legacy of Genie Clinicus', category: 'Portraits' },
  { src: '/GC-general.jpeg', alt: 'Genie Clinicus General', category: 'Clinical' },
]

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<typeof PHOTOS[0] | null>(null)

  return (
    <section id='gallery' className='py-24 bg-[#0A0927] relative overflow-hidden'>
      <div className='container mx-auto px-6 md:px-12 relative z-10'>
        
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <div className='max-w-2xl'>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='text-4xl md:text-6xl font-black text-white tracking-tighter'
            >
              CAPTURE THE <span className='text-[#D97706]'>MEMORIES.</span>
            </motion.h2>
            <p className='text-slate-400 mt-4 font-medium'>
              A visual journey through grit, friendship, and clinical excellence.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div 
          className='flex gap-4 md:gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImg(photo)}
              className='relative min-w-[280px] md:min-w-[400px] aspect-[4/5] group cursor-pointer rounded-[1.5rem] overflow-hidden border border-white/10 snap-center shadow-2xl flex-shrink-0'
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
              
              <div className='absolute inset-0 bg-gradient-to-t from-[#0A0927] via-transparent to-transparent opacity-80 flex flex-col justify-end p-8'>
                <p className='text-white font-black text-xl leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform'>
                  {photo.alt}
                </p>
                <div className='mt-2 flex items-center gap-2 text-[#D97706] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity'>
                   <Maximize2 size={12} /> Expand
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fully Responsive Lightbox with Integrated UI */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[200] bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center'
          >
            <div className='w-full max-w-6xl h-full flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 gap-8 lg:gap-16'>
              
              {/* Image Section: Takes priority on mobile */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className='relative w-full aspect-[4/5] lg:aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/40'
              >
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.alt}
                  fill
                  className='object-contain'
                  priority
                />
              </motion.div>

              {/* Info Panel with Integrated Close Button */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='w-full lg:w-[450px] space-y-6 text-left flex flex-col'
              >
                {/* Responsive Header within Text Panel */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 text-[#D97706] text-[10px] font-black uppercase tracking-widest'>
                    <Info size={14} />
                    {selectedImg.category}
                  </div>
                  
                  {/* Integrated Cancel Button */}
                  <button 
                    onClick={() => setSelectedImg(null)}
                    className='p-3 bg-white/5 hover:bg-[#D97706] rounded-full text-white transition-all active:scale-90 border border-white/10 group'
                  >
                    <X size={20} className='group-hover:rotate-90 transition-transform' />
                  </button>
                </div>
                
                <div className='space-y-4'>
                  <h3 className='text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.85]'>
                    {selectedImg.alt.toUpperCase()}
                  </h3>
                  
                  <p className='text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-sm'>
                    Immortalizing clinical excellence and the unbreakable bonds of the Class of 2025.
                  </p>
                </div>

                <div className='pt-6 border-t border-white/10 flex items-center gap-4'>
                   <span className='text-[10px] text-[#D97706] uppercase tracking-[0.3em] font-black'>
                     Class of 2025
                   </span>
                   <div className='h-1 w-1 rounded-full bg-white/20' />
                   <span className='text-[10px] text-white/30 uppercase tracking-[0.3em] font-black'>
                     Archive
                   </span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}