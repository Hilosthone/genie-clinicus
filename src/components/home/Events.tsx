// // src/components/home/Events.tsx
// 'use client'
// import { motion } from 'framer-motion'
// import {
//   Calendar,
//   Clock,
//   MapPin,
//   ChevronRight,
//   ChevronLeft,
//   MoveHorizontal,
// } from 'lucide-react'
// import { useRef, useState, useEffect } from 'react'
// import { EVENTS } from '@/src/constants'

// export default function Events() {
//   const scrollRef = useRef<HTMLDivElement>(null)
//   const [canScrollLeft, setCanScrollLeft] = useState(false)
//   const [canScrollRight, setCanScrollRight] = useState(true)

//   const checkScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
//       setCanScrollLeft(scrollLeft > 10)
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
//     }
//   }

//   useEffect(() => {
//     const el = scrollRef.current
//     if (el) {
//       el.addEventListener('scroll', checkScroll)
//       return () => el.removeEventListener('scroll', checkScroll)
//     }
//   }, [])

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const { clientWidth } = scrollRef.current
//       const offset =
//         direction === 'left' ? -clientWidth * 0.7 : clientWidth * 0.7
//       scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
//     }
//   }

//   return (
//     <section
//       id='events'
//       className='py-16 bg-[#0A0927] relative overflow-hidden'
//     >
//       <div className='absolute top-0 left-0 w-[400px] h-[400px] bg-[#93A5D1]/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2' />

//       <div className='container mx-auto px-6 relative z-10'>
//         <div className='flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4'>
//           <div className='max-w-md'>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className='flex items-center gap-2 mb-2'
//             >
//               <div className='h-[1px] w-8 bg-[#D97706]' />
//               <span className='text-[#D97706] font-black text-[9px] uppercase tracking-[0.4em]'>
//                 Roadmap
//               </span>
//             </motion.div>
//             <h2 className='text-3xl font-black text-white tracking-tighter'>
//               Class of{' '}
//               <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#93A5D1]'>
//                 2025
//               </span>
//             </h2>
//           </div>

//           <div className='flex items-center gap-4'>
//             <div className='hidden sm:flex items-center gap-2 text-white/10 font-bold text-[9px] uppercase tracking-widest'>
//               <MoveHorizontal size={12} />
//               <span>Swipe</span>
//             </div>

//             <div className='flex gap-2'>
//               <button
//                 onClick={() => scroll('left')}
//                 disabled={!canScrollLeft}
//                 className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white transition-all ${!canScrollLeft ? 'opacity-10 cursor-not-allowed' : 'hover:bg-white/5'}`}
//               >
//                 <ChevronLeft size={18} />
//               </button>
//               <button
//                 onClick={() => scroll('right')}
//                 disabled={!canScrollRight}
//                 className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white transition-all ${!canScrollRight ? 'opacity-10 cursor-not-allowed' : 'hover:bg-white/5'}`}
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//           </div>
//         </div>

//         <motion.div
//           ref={scrollRef}
//           className='flex gap-4 overflow-x-auto no-scrollbar pb-6 cursor-grab active:cursor-grabbing select-none'
//           style={{
//             scrollSnapType: 'x mandatory',
//             scrollbarWidth: 'none',
//             WebkitOverflowScrolling: 'touch',
//           }}
//         >
//           {EVENTS.map((event, index) => (
//             <motion.div
//               key={index}
//               className='min-w-[280px] md:min-w-[320px] scroll-snap-align-start h-auto'
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//             >
//               <EventCard event={event} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// function EventCard({ event }: { event: any }) {
//   return (
//     <div className='group relative bg-white/[0.01] border border-white/5 rounded-[1.5rem] p-5 h-full transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10'>
//       <div
//         className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[8px] font-black uppercase tracking-widest mb-4'
//         style={{ color: event.color }}
//       >
//         <div
//           className='w-1 h-1 rounded-full'
//           style={{ backgroundColor: event.color }}
//         />
//         {event.type}
//       </div>

//       <h3 className='text-lg font-bold text-white mb-2 group-hover:text-[#D97706] transition-colors line-clamp-1'>
//         {event.title}
//       </h3>

//       <p className='text-slate-500 text-xs font-medium leading-relaxed mb-5 line-clamp-2'>
//         {event.description}
//       </p>

//       <div className='flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-white/5'>
//         <div className='flex items-center gap-1.5 text-slate-400'>
//           <Calendar size={12} className='text-[#D97706]' />
//           <span className='text-[10px] font-bold'>{event.date}</span>
//         </div>
//         <div className='flex items-center gap-1.5 text-slate-400'>
//           <Clock size={12} className='text-[#D97706]' />
//           <span className='text-[10px] font-bold'>{event.time}</span>
//         </div>
//         <div className='flex items-center gap-1.5 text-slate-400 w-full'>
//           <MapPin size={12} className='text-[#D97706]' />
//           <span className='text-[10px] font-bold truncate'>
//             {event.location}
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }


// src/components/home/Events.tsx
'use client'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  ChevronLeft,
  MoveHorizontal,
} from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { EVENTS } from '@/src/constants'

export default function Events() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      return () => el.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const offset =
        direction === 'left' ? -clientWidth * 0.7 : clientWidth * 0.7
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <section
      id='events'
      className='py-24 lg:py-32 bg-[#0A0927] relative overflow-hidden'
    >
      {/* Enhanced Background Image - Higher Clarity */}
      <div className='absolute inset-0 z-0'>
        <Image
          src="/GC-g.jpeg"
          alt="Events Background"
          fill
          className="object-cover opacity-65 grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
          priority
        />
        {/* Radial mask: Clearer in the center, darkens towards the section edges */}
        <div className='absolute inset-0 bg-[#0A0927]/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0A0927_90%)]' />
        <div className='absolute inset-0 bg-gradient-to-b from-[#0A0927] via-transparent to-[#0A0927]' />
      </div>

      <div className='container mx-auto px-6 md:px-12 relative z-10'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
          <div className='max-w-md'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='flex items-center gap-2 mb-4'
            >
              <div className='h-[2px] w-12 bg-[#D97706]' />
              <span className='text-[#D97706] font-black text-[11px] uppercase tracking-[0.5em]'>
                The Timeline
              </span>
            </motion.div>
            <h2 className='text-5xl md:text-6xl font-black text-white tracking-tighter'>
              CLASS OF{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#f59e0b]'>
                2025
              </span>
            </h2>
          </div>

          <div className='flex items-center gap-8'>
            <div className='hidden lg:flex items-center gap-3 text-white/40 font-black text-[10px] uppercase tracking-widest'>
              <MoveHorizontal size={16} className="animate-pulse" />
              <span>Scroll to navigate</span>
            </div>

            <div className='flex gap-4'>
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-xl ${!canScrollLeft ? 'opacity-10 cursor-not-allowed' : 'hover:bg-[#D97706] hover:border-[#D97706] shadow-lg shadow-[#D97706]/20'}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-xl ${!canScrollRight ? 'opacity-10 cursor-not-allowed' : 'hover:bg-[#D97706] hover:border-[#D97706] shadow-lg shadow-[#D97706]/20'}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          ref={scrollRef}
          className='flex gap-8 overflow-x-auto no-scrollbar pb-12 cursor-grab active:cursor-grabbing select-none'
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {EVENTS.map((event, index) => (
            <motion.div
              key={index}
              className='min-w-[320px] md:min-w-[420px] scroll-snap-align-start h-auto'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function EventCard({ event }: { event: any }) {
  return (
    <div className='group relative bg-white/[0.04] border border-white/10 rounded-[2.5rem] p-8 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-[#D97706]/40 shadow-2xl backdrop-blur-2xl'>
      <div
        className='inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-[0.25em] mb-8'
        style={{ color: event.color, border: `1px solid ${event.color}20` }}
      >
        <div
          className='w-2 h-2 rounded-full animate-pulse'
          style={{ backgroundColor: event.color }}
        />
        {event.type}
      </div>

      <h3 className='text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-[#D97706] transition-colors leading-tight tracking-tight'>
        {event.title}
      </h3>

      <p className='text-slate-400 text-sm md:text-base font-medium leading-relaxed mb-10 line-clamp-3'>
        {event.description}
      </p>

      <div className='space-y-4 pt-8 border-t border-white/10'>
        {[
          { icon: Calendar, text: event.date },
          { icon: Clock, text: event.time },
          { icon: MapPin, text: event.location }
        ].map((item, i) => (
          <div key={i} className='flex items-center gap-4 text-slate-300'>
            <div className='w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform'>
              <item.icon size={16} className='text-[#D97706]' />
            </div>
            <span className='text-xs md:text-sm font-bold'>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}