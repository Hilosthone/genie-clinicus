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

  const sidebarVariants: Variants = {
    hidden: { x: '110%', skewY: 2 },
    visible: {
      x: 0,
      skewY: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 150,
        mass: 0.8,
      },
    },
    exit: {
      x: '110%',
      transition: { ease: 'easeInOut', duration: 0.4 },
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
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            'w-full max-w-6xl transition-all duration-700 ease-in-out',
            'flex justify-between items-center px-6 py-3 rounded-[2.5rem] border',
            // When scrolled or open: Deeper blur, slightly more visible navy
            scrolled || isOpen
              ? 'bg-[#0A0927]/40 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50'
              : 'bg-white/[0.03] backdrop-blur-lg border-white/[0.08] shadow-none',
          )}
        >
          {/* Logo Section - Links to Home/Top */}
          <div
            onClick={scrollToTop}
            className='flex items-center gap-3 group cursor-pointer'
          >
            <div className='relative w-11 h-11 rounded-full overflow-hidden border border-white/10 group-hover:border-[#D97706]/50 transition-all duration-500 bg-[#0A0927]'>
              <Image
                src={GClogo}
                alt='Genie Clinicus Logo'
                fill
                className='object-cover group-hover:scale-110 transition-transform duration-500'
              />
            </div>
            <div className='flex flex-col'>
              <span className='font-black text-white tracking-tighter text-lg leading-none group-hover:text-[#D97706] transition-colors'>
                GENIE CLINICUS
              </span>
              <span className='text-[9px] text-[#93A5D1] font-bold tracking-[0.2em] uppercase leading-none mt-1 text-nowrap'>
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 bg-[#D97706] text-white px-6 py-2.5 rounded-full text-sm font-black transition-all shadow-lg shadow-orange-900/20'
              >
                Secure Merch
                <ArrowRight size={16} />
              </motion.button>
            </div>

            {/* Hamburger Toggle */}
            <button
              className='lg:hidden p-3 text-white hover:bg-white/10 rounded-2xl transition-colors bg-white/5'
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* MOBILE SIDEBAR NAV */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className='fixed inset-0 bg-black/80 backdrop-blur-md z-[101]'
            />

            <motion.div
              variants={sidebarVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='fixed top-0 right-0 h-full w-[300px] sm:w-[400px] bg-[#0A0927]/95 backdrop-blur-2xl z-[102] p-10 flex flex-col shadow-[-40px_0_80px_rgba(0,0,0,0.7)] border-l border-white/10 rounded-l-[3.5rem]'
            >
              <button
                onClick={() => setIsOpen(false)}
                className='self-end p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5 mb-8'
              >
                <X size={20} />
              </button>

              <div className='flex flex-col gap-10 h-full'>
                <div>
                  <p className='text-[#D97706] text-[10px] font-black uppercase tracking-[0.5em] mb-8'>
                    Navigation
                  </p>

                  <div className='flex flex-col gap-2'>
                    {NAV_LINKS.map((link, i) => (
                      <motion.a
                        key={link.name}
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className='py-3 text-2xl font-bold text-white hover:text-[#D97706] transition-all flex items-center justify-between group'
                      >
                        <span className='group-hover:translate-x-2 transition-transform duration-300'>
                          {link.name}
                        </span>
                        <ArrowRight
                          size={20}
                          className='opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 text-[#D97706]'
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className='mt-auto space-y-8'>
                  <div className='space-y-4'>
                    <p className='text-[#93A5D1] text-[10px] font-black uppercase tracking-[0.5em]'>
                      Official Packages
                    </p>
                    <button className='w-full bg-white/5 border border-white/10 text-white py-5 rounded-[2rem] font-black text-sm flex items-center justify-center gap-3 hover:bg-[#D97706] hover:border-[#D97706] transition-all duration-500 group shadow-xl'>
                      <ShieldCheck
                        size={20}
                        className='group-hover:rotate-12 transition-transform'
                      />
                      Get Your Merch
                    </button>
                  </div>

                  <div className='flex items-center gap-4 text-slate-500'>
                    <a
                      href='https://instagram.com'
                      target='_blank'
                      className='p-3 bg-white/5 rounded-full hover:text-[#D97706] transition-colors'
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href='https://wa.me/yournumber'
                      target='_blank'
                      className='p-3 bg-white/5 rounded-full hover:text-[#25D366] transition-colors'
                    >
                      <FaWhatsapp size={18} />
                    </a>
                    <div className='h-[1px] flex-grow bg-white/5'></div>
                  </div>

                  <div className='text-left opacity-30'>
                    <h3 className='text-white font-black text-sm tracking-tighter'>
                      GENIE CLINICUS
                    </h3>
                    <p className='text-[8px] text-white/80 uppercase tracking-[0.4em] font-bold mt-1'>
                      FYB Committee • 2025
                    </p>
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