// src/components/layout/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { NAV_LINKS } from '@/src/constants'
import { cn } from '@/src/lib/utils'
import GClogo from '@/src/components/home/images/GClogo.jpeg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Optimized for speed: Fast pulse, short duration
  const hoverVariants: Variants = {
    initial: { scale: 1 },
    autoHover: { 
      scale: [1, 1.02, 1],
      transition: { 
        duration: 1.2, 
        repeat: 1, 
        ease: "easeOut" 
      }
    }
  }

  const sidebarVariants: Variants = {
    hidden: { x: '100%', opacity: 0.5 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25, // Snappier response
        stiffness: 200,
        mass: 0.6,
      },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { ease: 'circIn', duration: 0.2 },
    },
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (isOpen) setIsOpen(false)
  }

  return (
    <>
      <header className='fixed top-6 inset-x-0 z-[100] flex justify-center px-4'>
        <motion.nav
          initial={{ y: -40, opacity: 0 }} // Reduced travel distance for faster arrival
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }} // Snappy entry
          whileInView="autoHover"
          variants={hoverVariants}
          viewport={{ once: true }}
          className={cn(
            'w-full max-w-6xl transition-all duration-500 ease-in-out',
            'flex justify-between items-center px-6 py-3 rounded-[2.5rem] border',
            scrolled || isOpen
              ? 'bg-[#0A0927]/60 backdrop-blur-3xl border-white/10 shadow-2xl shadow-black/50'
              : 'bg-white/[0.03] backdrop-blur-lg border-white/[0.08] shadow-none',
          )}
        >
          {/* Logo Section */}
          <div
            onClick={scrollToTop}
            className='flex items-center gap-3 group cursor-pointer'
          >
            <div className='relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-white/10 group-hover:border-[#D97706]/50 transition-all duration-500 bg-[#0A0927]'>
              <Image
                src={GClogo}
                alt='Genie Clinicus Logo'
                fill
                className='object-cover group-hover:scale-110 transition-transform duration-500'
              />
            </div>
            <div className='flex flex-col'>
              <span className='font-black text-white tracking-tighter text-base md:text-lg leading-none group-hover:text-[#D97706] transition-colors'>
                GENIE CLINICUS
              </span>
              <span className='text-[8px] md:text-[9px] text-[#93A5D1] font-bold tracking-[0.2em] uppercase leading-none mt-1'>
                FYB 2025
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className='hidden lg:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='relative px-5 py-2 text-sm font-bold text-slate-300 hover:text-[#D97706] transition-colors group'
              >
                {link.name}
                <motion.span className='absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#D97706] transition-all group-hover:w-1/2 group-hover:left-1/4' />
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className='flex items-center gap-4'>
            <div className='hidden md:flex'>
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 bg-[#D97706] text-white px-6 py-2.5 rounded-full text-xs font-black transition-all shadow-lg shadow-orange-900/20'
              >
                Secure Merch
                <ArrowRight size={14} />
              </motion.a>
            </div>

            <button
              className='lg:hidden p-2.5 text-white hover:bg-white/10 rounded-2xl transition-colors bg-white/5'
              onClick={() => setIsOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* MOBILE SIDEBAR NAV */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Lightened Backdrop: Switched from bg-black/85 to bg-black/30 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className='fixed inset-0 bg-black/30 backdrop-blur-sm z-[101]'
            />

            <motion.div
              variants={sidebarVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='fixed top-0 right-0 h-full w-[260px] md:w-[320px] bg-[#0A0927]/95 backdrop-blur-3xl z-[102] p-8 flex flex-col shadow-[-10px_0_40px_rgba(0,0,0,0.3)] border-l border-white/10 rounded-l-[2.5rem]'
            >
              <button
                onClick={() => setIsOpen(false)}
                className='self-end p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5 mb-6'
              >
                <X size={18} />
              </button>

              <div className='flex flex-col gap-8 h-full'>
                <div>
                  <p className='text-[#D97706] text-[9px] font-black uppercase tracking-[0.4em] mb-6'>
                    Menu
                  </p>

                  <div className='flex flex-col gap-1'>
                    {NAV_LINKS.map((link, i) => (
                      <motion.a
                        key={link.name}
                        initial={{ x: 15, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.03 }} // Faster staggered reveal
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className='py-2.5 text-xl font-bold text-white hover:text-[#D97706] transition-all flex items-center justify-between group'
                      >
                        <span className='group-hover:translate-x-1 transition-transform'>
                          {link.name}
                        </span>
                        <ArrowRight size={16} className='opacity-0 group-hover:opacity-100 text-[#D97706] -translate-x-2' />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className='mt-auto space-y-6'>
                  <div className='space-y-3'>
                    <p className='text-[#93A5D1] text-[9px] font-black uppercase tracking-[0.4em]'>
                      Payments
                    </p>
                    <a 
                      href="#packages"
                      onClick={() => setIsOpen(false)}
                      className='w-full bg-[#D97706] text-white py-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl'
                    >
                      <ShieldCheck size={18} />
                      Secure Merch
                    </a>
                  </div>

                  <div className='flex items-center gap-3'>
                    <a href='#' className='p-2.5 bg-white/5 rounded-full text-slate-400 hover:text-[#D97706] transition-colors'>
                      <FaInstagram size={16} />
                    </a>
                    <a href='#' className='p-2.5 bg-white/5 rounded-full text-slate-400 hover:text-[#25D366] transition-colors'>
                      <FaWhatsapp size={16} />
                    </a>
                    <div className='h-[1px] flex-grow bg-white/5'></div>
                  </div>

                  <div className='pb-4'>
                    <h3 className='text-white font-black text-xs tracking-tighter opacity-40'>
                      GENIE CLINICUS 2025
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}