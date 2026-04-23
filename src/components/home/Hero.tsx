// src/components/home/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut', // TypeScript now sees this specifically as "easeOut"
      },
    },
  } as const 

  return (
    <section className='relative min-h-screen flex items-center justify-center pt-30 overflow-hidden bg-[#0A0927]'>
      {/* Background Brand Orbs - Refined for professional depth */}
      <div className='absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-[#93A5D1]/10 blur-[140px] rounded-full animate-pulse' />
      <div className='absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] bg-[#D97706]/10 blur-[140px] rounded-full' />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='text-center'
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className='flex justify-center mb-8'
          >
            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#93A5D1] text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm'>
              <Sparkles size={12} className='text-[#D97706]' />
              Genie Clinicus Class of 2025
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className='text-5xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter'
          >
            THE FINAL LAP.
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#f59e0b] to-[#93A5D1]'>
              THE MILESTONE.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className='max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-medium'
          >
            From clinical wards to world-class excellence. Join the committee in
            celebrating years of friendship and triumph.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-5 justify-center items-center'
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px -10px rgba(217, 119, 6, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              className='group relative px-10 py-5 bg-[#D97706] text-white rounded-2xl font-black text-lg overflow-hidden'
            >
              <span className='relative z-10'>Explore Packages</span>
              <div className='absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]' />
            </motion.button>

            {/* Updated to anchor link for scrolling */}
            <motion.a
              href='#events'
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
              whileTap={{ scale: 0.98 }}
              className='px-10 py-5 bg-transparent border border-white/20 text-white rounded-2xl font-black text-lg backdrop-blur-sm transition-all cursor-pointer'
            >
              Event Schedule
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Aesthetic Vertical Trademark */}
      <div className='absolute right-10 bottom-10 hidden lg:block opacity-30'>
        <p className='text-white text-[10px] tracking-[0.6em] font-black uppercase [writing-mode:vertical-lr] rotate-180'>
          Genie Clinicus • Committee Authorized
        </p>
      </div>
    </section>
  )
}