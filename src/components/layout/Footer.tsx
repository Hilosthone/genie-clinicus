// src/components/layout/Footer.tsx
'use client'
import { motion } from 'framer-motion'
import { Heart, Phone } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const committee = [
    {
      name: 'Iyanuoluwa',
      phone: '+234 807 416 9009',
      raw: '2348074169009',
      color: '#D97706',
    },
    {
      name: 'Rodiyah',
      phone: '+234 814 529 5671',
      raw: '2348145295671',
      color: '#93A5D1',
    },
  ]

  return (
    <footer className='relative bg-[#0A0927] pt-20 pb-10 px-6 overflow-hidden'>
      {/* Decorative Top Border Gradient */}
      <div className='absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent' />

      {/* Brand Background Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[120px] bg-[#D97706]/10 blur-[100px] rounded-full -z-10 opacity-50' />

      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-start'>
          {/* Brand Column */}
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <h2 className='text-3xl font-black text-white tracking-tighter leading-none'>
              GENIE <span className='text-[#D97706]'>CLINICUS.</span>
            </h2>
            <p className='text-[#93A5D1] text-[10px] font-bold mt-3 uppercase tracking-[0.3em] opacity-80'>
              Medical Rehabilitation • Class of 2025
            </p>
            <p className='text-slate-500 text-[9px] mt-1 font-bold uppercase tracking-widest'>
              Obafemi Awolowo University
            </p>
          </div>

          {/* Contact Details from Roadmap */}
          <div className='flex flex-col items-center text-center space-y-4'>
            <span className='text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-2'>
              Contact Committee
            </span>
            <div className='flex flex-col gap-4 w-full max-w-[280px]'>
              {committee.map((member) => (
                <div
                  key={member.name}
                  className='flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-2xl p-3 pl-4'
                >
                  <div className='text-left'>
                    <p
                      className='text-[10px] font-black uppercase'
                      style={{ color: member.color }}
                    >
                      {member.name}
                    </p>
                    <p className='text-white text-xs font-bold tracking-tighter'>
                      {member.phone}
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    <a
                      href={`https://wa.me/${member.raw}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all'
                    >
                      <FaWhatsapp size={14} />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all'
                    >
                      <Phone size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className='flex flex-col items-center md:items-end gap-6'>
            <span className='text-white/20 text-[10px] font-black uppercase tracking-[0.5em]'>
              Follow the Journey
            </span>
            <div className='flex gap-4'>
              <motion.a
                whileHover={{
                  y: -5,
                  backgroundColor: 'rgba(217, 119, 6, 0.15)',
                  color: '#D97706',
                }}
                href='#'
                className='w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 transition-all'
                aria-label='Instagram'
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{
                  y: -5,
                  backgroundColor: 'rgba(147, 165, 209, 0.15)',
                  color: '#93A5D1',
                }}
                href='https://wa.me/2348074169009'
                target='_blank'
                className='w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 transition-all'
                aria-label='WhatsApp'
              >
                <FaWhatsapp size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className='mt-20 pt-8 border-t border-white/5'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='flex flex-col items-center md:items-start gap-2'>
              <div className='flex items-center gap-2 text-slate-500 text-[9px] font-black uppercase tracking-[0.4em]'>
                <span>© 2026 FYB Committee</span>
              </div>
              <div className='flex items-center gap-1.5 text-slate-600 text-[10px] font-semibold'>
                <span>Built with precision</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Heart size={10} className='text-[#D97706] fill-[#D97706]' />
                </motion.div>
                <span>for the Class of 2025</span>
              </div>
            </div>

            <div className='flex gap-8'>
              <a
                href='#'
                className='text-[9px] text-slate-700 hover:text-[#93A5D1] uppercase tracking-widest font-bold transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-[9px] text-slate-700 hover:text-[#93A5D1] uppercase tracking-widest font-bold transition-colors'
              >
                OAU Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
