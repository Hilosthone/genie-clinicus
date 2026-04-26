// src/app/blog/page.tsx
'use client'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const BLOG_A = [
  { src: '/blog11.jpeg', title: 'The Vision' },
  { src: '/blog12.jpeg', title: 'Clinical Fun' },
  { src: '/blog13.jpeg', title: 'Carriage Rounds' },
  { src: '/blog14.jpeg', title: 'Team Synergy' },
  { src: '/blog15.jpeg', title: 'Success Stories' },
]

const BLOG_B = [
  { src: '/blog21.jpeg', title: 'Team Synergy' },
  { src: '/blog22.jpeg', title: 'Research Lab' },
  { src: '/blog23.jpeg', title: 'Conference Hall' },
  { src: '/blog24.jpeg', title: 'First Assist' },
  { src: '/blog25.jpeg', title: 'The Vows' },
  { src: '/blog26.jpeg', title: 'Final Review' },
  { src: '/blog27.jpeg', title: 'Graduation Prep' },
  { src: '/blog28.jpeg', title: 'Legacy' },
]

// 2. Explicitly type the objects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" // TypeScript now knows this is a valid easing string
    } 
  }
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A0927] text-white">
      {/* Hero Section - Face Card */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="/blog.jpeg" 
          alt="Blog Hero" 
          fill 
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0927]/50 to-[#0A0927]" />
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter"
          >
            THE <span className="text-[#D97706]">JOURNAL.</span>
          </motion.h1>
          <p className="mt-4 text-slate-400 font-medium tracking-widest uppercase text-xs md:text-sm">
            Stories of Grit, Growth, and Clinical Mastery
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20 space-y-32">
        
        {/* Section Blog A */}
        <section>
          <div className="mb-12">
            <h2 className="text-2xl font-black tracking-widest text-[#D97706] uppercase border-l-4 border-[#D97706] pl-4">
              Phase One: The Foundation
            </h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {BLOG_A.map((img, i) => (
              <motion.div key={i} variants={itemVariants} className="break-inside-avoid">
                <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5">
                  <Image 
                    src={img.src} 
                    alt={img.title}
                    width={500}
                    height={700}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="font-bold text-sm">{img.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section Blog B */}
        <section>
          <div className="mb-12">
            <h2 className="text-2xl font-black tracking-widest text-[#D97706] uppercase border-l-4 border-[#D97706] pl-4">
              Phase Two: Clinical Excellence
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {BLOG_B.map((img, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className={`relative aspect-square overflow-hidden rounded-xl border border-white/5
                  ${i === 0 || i === 7 ? 'col-span-2 row-span-2 aspect-auto' : ''}`}
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </main>
  )
}