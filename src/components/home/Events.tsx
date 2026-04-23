// src/components/home/Events.tsx
'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { EVENTS } from '@/src/constants'

export default function Events() {
  return (
    <section
      id='events'
      className='py-20 bg-[#0A0927] relative overflow-hidden'
    >
      {/* Background Glow */}
      <div className='absolute top-0 left-0 w-[400px] h-[400px] bg-[#93A5D1]/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-xl mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='flex items-center gap-2 mb-3'
          >
            <div className='h-[1px] w-10 bg-[#D97706]' />
            <span className='text-[#D97706] font-black text-[10px] uppercase tracking-[0.4em]'>
              Timeline
            </span>
          </motion.div>
          <h2 className='text-3xl md:text-4xl font-black text-white tracking-tighter mb-4'>
            The{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#93A5D1]'>
              Milestone
            </span>{' '}
            Week.
          </h2>
          <p className='text-slate-400 font-medium text-base leading-relaxed'>
            Mark your folders. Here is the official schedule for our final week
            of excellence.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {EVENTS.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EventCard({ event, index }: { event: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5 }}
      className='group relative bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-[#D97706]/20'
    >
      {/* Type Badge */}
      <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[#93A5D1] text-[9px] font-black uppercase tracking-widest mb-6'>
        <div className='w-1 h-1 rounded-full bg-[#D97706]' />
        {event.type}
      </div>

      <h3 className='text-xl font-black text-white mb-3 group-hover:text-[#D97706] transition-colors'>
        {event.title}
      </h3>

      <p className='text-slate-500 text-xs font-medium leading-relaxed mb-6'>
        {event.description}
      </p>

      <div className='space-y-3 pt-4 border-t border-white/5'>
        <div className='flex items-center gap-3 text-slate-300'>
          <Calendar size={14} className='text-[#D97706]' />
          <span className='text-[11px] font-bold tracking-tight'>
            {event.date}
          </span>
        </div>

        <div className='flex items-center gap-3 text-slate-300'>
          <Clock size={14} className='text-[#D97706]' />
          <span className='text-[11px] font-bold tracking-tight'>
            {event.time}
          </span>
        </div>

        <div className='flex items-center gap-3 text-slate-300'>
          <MapPin size={14} className='text-[#D97706]' />
          <span className='text-[11px] font-bold tracking-tight'>
            {event.location}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
