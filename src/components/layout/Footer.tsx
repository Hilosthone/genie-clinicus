// src/components/layout/Footer.tsx
'use client'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='relative bg-[#0A0927] pt-20 pb-10 px-6 overflow-hidden'>
      {/* Decorative Top Border Gradient */}
      <div className='absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent' />

      {/* Brand Background Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[120px] bg-[#D97706]/10 blur-[100px] rounded-full -z-10 opacity-50' />

      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6'>
          {/* Brand Column */}
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <h2 className='text-3xl font-black text-white tracking-tighter leading-none'>
              GENIE <span className='text-[#D97706]'>CLINICUS.</span>
            </h2>
            <p className='text-[#93A5D1] text-[10px] font-bold mt-3 uppercase tracking-[0.3em] opacity-80'>
              Medical Rehabilitation • Class of 2025
            </p>
          </div>

          {/* Center: Built By / Copyright */}
          <div className='order-3 md:order-2 flex flex-col items-center gap-3'>
            <div className='flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]'>
              <span>© 2026 FYB Committee</span>
            </div>
            <div className='flex items-center gap-1.5 text-slate-600 text-[11px] font-semibold'>
              <span>Built with Precision</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart size={12} className='text-[#D97706] fill-[#D97706]' />
              </motion.div>
              <span>for the Milestone</span>
            </div>
          </div>

          {/* Social Links (Using FA Icons) */}
          <div className='order-2 md:order-3 flex gap-5'>
            <motion.a
              whileHover={{
                y: -5,
                backgroundColor: 'rgba(217, 119, 6, 0.15)',
                color: '#D97706',
                borderColor: 'rgba(217, 119, 6, 0.3)',
              }}
              href='#'
              className='w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 transition-all duration-300'
              aria-label='Instagram'
            >
              <FaInstagram size={24} />
            </motion.a>

            <motion.a
              whileHover={{
                y: -5,
                backgroundColor: 'rgba(147, 165, 209, 0.15)',
                color: '#93A5D1',
                borderColor: 'rgba(147, 165, 209, 0.3)',
              }}
              href='#'
              className='w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 transition-all duration-300'
              aria-label='WhatsApp'
            >
              <FaWhatsapp size={24} />
            </motion.a>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className='mt-20 pt-8 border-t border-white/5'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-[9px] text-slate-700 font-black uppercase tracking-[0.8em] text-center md:text-left'>
              Uni • Department of Med-Rehab
            </p>
            <div className='flex gap-6'>
              <a
                href='#'
                className='text-[9px] text-slate-800 hover:text-[#93A5D1] uppercase tracking-widest font-bold transition-colors'
              >
                Privacy
              </a>
              <a
                href='#'
                className='text-[9px] text-slate-800 hover:text-[#93A5D1] uppercase tracking-widest font-bold transition-colors'
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
