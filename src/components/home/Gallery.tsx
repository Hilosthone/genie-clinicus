// // src/components/home/Gallery.tsx
// 'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import { useState } from 'react'
// import { Maximize2, X, Info } from 'lucide-react'

// export const PHOTOS = [
//   { src: '/GC-a.jpeg', alt: 'The Beginning of the End', category: 'Milestone' },
//   { src: '/GC-b.jpeg', alt: 'Clinical Excellence', category: 'Clinical' },
//   { src: '/GC-c.jpeg', alt: 'Class of 2025 Portraits', category: 'Portraits' },
//   { src: '/GC-d.jpeg', alt: 'Committee Strategic Session', category: 'Event' },
//   { src: '/GC-e.jpeg', alt: 'Grand Milestone Moments', category: 'Milestone' },
//   { src: '/GC-f.jpeg', alt: 'Ward Round Memories', category: 'Clinical' },
//   { src: '/GC-g.jpeg', alt: 'The Final Lap Preparation', category: 'Event' },
//   { src: '/GC-h.jpeg', alt: 'Legacy of Genie Clinicus', category: 'Portraits' },
//   { src: '/GC-general.jpeg', alt: 'Genie Clinicus General', category: 'Clinical' },
// ]

// export default function Gallery() {
//   const [selectedImg, setSelectedImg] = useState<typeof PHOTOS[0] | null>(null)

//   return (
//     <section id='gallery' className='py-24 bg-[#0A0927] relative overflow-hidden'>
//       <div className='container mx-auto px-6 md:px-12 relative z-10'>
        
//         <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
//           <div className='max-w-2xl'>
//             <motion.h2 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className='text-4xl md:text-6xl font-black text-white tracking-tighter'
//             >
//               CAPTURE THE <span className='text-[#D97706]'>MEMORIES.</span>
//             </motion.h2>
//             <p className='text-slate-400 mt-4 font-medium'>
//               A visual journey through years of grit, friendship, and clinical excellence.
//             </p>
//           </div>
//           <div className='hidden md:block text-[#D97706] text-[10px] font-black uppercase tracking-[0.3em] opacity-50'>
//             Scroll to explore →
//           </div>
//         </div>

//         {/* Horizontal Scroll Container */}
//         <motion.div 
//           className='flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory'
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           {PHOTOS.map((photo, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               onClick={() => setSelectedImg(photo)}
//               className='relative min-w-[300px] md:min-w-[400px] aspect-[4/5] group cursor-pointer rounded-[2rem] overflow-hidden border border-white/10 snap-center shadow-2xl flex-shrink-0'
//             >
//               <Image
//                 src={photo.src}
//                 alt={photo.alt}
//                 fill
//                 className='object-cover transition-transform duration-700 group-hover:scale-110'
//               />
              
//               {/* Subtle Overlay */}
//               <div className='absolute inset-0 bg-gradient-to-t from-[#0A0927] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8'>
//                 <p className='text-white font-black text-xl leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform'>
//                   {photo.alt}
//                 </p>
//                 <div className='mt-2 flex items-center gap-2 text-[#D97706] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity'>
//                    <Maximize2 size={12} /> View Details
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Professional Lightbox */}
//       <AnimatePresence>
//         {selectedImg && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className='fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6 md:p-12'
//           >
//             {/* Close Button */}
//             <button 
//               onClick={() => setSelectedImg(null)}
//               className='absolute top-6 right-6 md:top-10 md:right-10 z-[110] p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all group'
//             >
//               <X size={32} className='group-rotate-90 transition-transform' />
//             </button>

//             <div className='relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-8 items-center'>
//               {/* Image Display */}
//               <motion.div 
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className='lg:col-span-3 relative aspect-[4/3] md:aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl'
//               >
//                 <Image
//                   src={selectedImg.src}
//                   alt={selectedImg.alt}
//                   fill
//                   className='object-contain bg-[#0A0927]/50'
//                 />
//               </motion.div>

//               {/* Property Display Panel */}
//               <motion.div 
//                 initial={{ x: 20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 className='lg:col-span-1 space-y-6 text-left'
//               >
//                 <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 text-[#D97706] text-[10px] font-black uppercase tracking-widest'>
//                   <Info size={14} />
//                   {selectedImg.category}
//                 </div>
                
//                 <h3 className='text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight'>
//                   {selectedImg.alt}
//                 </h3>
                
//                 <p className='text-slate-400 text-sm leading-relaxed font-medium'>
//                   This capture represents a pivotal moment in the Genie Clinicus journey, 
//                   immortalizing the Class of 2025's dedication to clinical excellence.
//                 </p>

//                 <div className='pt-6 border-t border-white/10'>
//                    <p className='text-[10px] text-white/30 uppercase tracking-[0.3em] font-black'>
//                      Class of 2025 Archive
//                    </p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }

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
              
              <div className='absolute inset-0 bg-gradient-to-t from-[#0A0927] via-transparent to-transparent opacity-80 flex flex-col justify-end p-6'>
                <p className='text-white font-black text-lg md:text-xl leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform'>
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

      {/* Fully Responsive Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col'
          >
            {/* Header: Lowered for better reach and visibility */}
            <div className='w-full px-6 pt-12 pb-6 md:pt-16 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent'>
              <div className='flex items-center gap-3'>
                <Info size={18} className='text-[#D97706]' />
                <span className='text-white/60 text-xs font-black uppercase tracking-[0.2em]'>{selectedImg.category}</span>
              </div>
              
              <button 
                onClick={() => setSelectedImg(null)}
                className='p-4 bg-[#D97706] hover:bg-[#B45309] rounded-full text-white transition-all active:scale-90 shadow-lg'
                aria-label="Close Gallery"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>

            {/* Content: Balanced for fit */}
            <div className='flex-1 overflow-y-auto px-6 pb-12 lg:flex lg:items-center lg:justify-center'>
              <div className='w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-16 items-center'>
                
                {/* Image Section */}
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className='relative w-full aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/40'
                >
                  <Image
                    src={selectedImg.src}
                    alt={selectedImg.alt}
                    fill
                    className='object-contain'
                    priority
                  />
                </motion.div>

                {/* Info Panel: Tighter layout to ensure it fits mobile height */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className='w-full lg:w-[400px] space-y-4 text-left'
                >
                  <h3 className='text-3xl md:text-5xl font-black text-white tracking-tighter leading-[0.9]'>
                    {selectedImg.alt.toUpperCase()}
                  </h3>
                  
                  <p className='text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-sm'>
                    Archive {selectedImg.category} — A visual testament to the Class of 2025's dedication.
                  </p>

                  <div className='pt-4 border-t border-white/10 flex items-center gap-4'>
                     <span className='text-[10px] text-[#D97706] uppercase tracking-[0.3em] font-black'>
                       Class of 2025
                     </span>
                     <div className='h-1 w-1 rounded-full bg-white/20' />
                     <span className='text-[10px] text-white/30 uppercase tracking-[0.3em] font-black'>
                       Genie Clinicus
                     </span>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}