// src/components/home/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  } as const

  return (
    <section className='relative min-h-[90vh] flex items-center pt-24 lg:pt-32 pb-16 overflow-hidden bg-[#0A0927]'>
      {/* Background Brand Orbs */}
      <div className='absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#93A5D1]/10 blur-[120px] rounded-full animate-pulse' />
      <div className='absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] bg-[#D97706]/10 blur-[120px] rounded-full' />

      <div className='container mx-auto px-8 md:px-12 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='text-left'
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className='flex justify-start mb-6'>
              <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#93A5D1] text-[9px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm'>
                <Sparkles size={10} className='text-[#D97706]' />
                Genie Clinicus Class of 2025
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className='text-4xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter'
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
              className='max-w-md text-sm md:text-base text-slate-400 mb-10 leading-relaxed font-medium'
            >
              From clinical wards to world-class excellence. Join the committee in
              celebrating years of friendship, grit, and clinical triumph.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className='flex flex-wrap gap-4 items-center'
            >
              <motion.a
                href='#packages'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='group relative inline-flex items-center justify-center px-7 py-4 bg-[#D97706] text-white rounded-xl font-black text-xs overflow-hidden transition-all shadow-lg shadow-[#D97706]/20'
              >
                <div className='absolute inset-0 bg-white/20 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-[-25deg]' />
                <span className='relative z-10'>Explore Packages</span>
              </motion.a>

              <motion.a
                href='#events'
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                className='px-7 py-4 bg-transparent border border-white/10 text-white rounded-xl font-black text-xs transition-all'
              >
                Event Schedule
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='relative'
          >
            {/* Image Frame */}
            <div className='relative z-20 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/60'>
              <Image 
                src="/GC-general.jpeg" 
                alt="Genie Clinicus General" 
                width={1400}
                height={1600}
                priority
                className='w-full h-auto object-cover hover:scale-105 transition-transform duration-1000'
              />
            </div>
            
            {/* Floating Decorative Elements */}
            <div className='absolute -top-6 -right-6 w-32 h-32 bg-[#D97706]/15 blur-3xl rounded-full' />
            <div className='absolute -bottom-8 -left-8 w-40 h-40 bg-[#93A5D1]/10 blur-3xl rounded-full' />
          </motion.div>

        </div>
      </div>

      {/* Aesthetic Vertical Trademark */}
      <div className='absolute right-8 bottom-8 hidden xl:block opacity-20'>
        <p className='text-white text-[8px] tracking-[0.5em] font-black uppercase [writing-mode:vertical-lr] rotate-180'>
          Genie Clinicus • Committee Authorized
        </p>
      </div>
    </section>
  )
}