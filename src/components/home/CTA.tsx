// // src/components/home/CTA.tsx
// 'use client'
// import { motion, Variants } from 'framer-motion'
// import { ArrowRight, ShieldCheck } from 'lucide-react'

// export default function CTA() {
//   const cardVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" } 
//     }
//   }

//   return (
//     <section className='py-24 px-6 relative overflow-hidden bg-[#0A0927]'>
//       {/* Background Decorative Gradient */}
//       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[#D97706]/5 blur-[120px] rounded-full -z-10' />

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={cardVariants}
//         className='max-w-5xl mx-auto bg-white/5 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm'
//       >
//         {/* Subtle Brand Pattern Overlay */}
//         <div className='absolute inset-0 opacity-[0.03] pointer-events-none bg-[url("https://www.transparenttextures.com/patterns/carbon-fibre.png")]' />

//         <div className='relative z-10'>
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="flex justify-center mb-6"
//           >
//             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 text-[#D97706] text-xs font-bold uppercase tracking-widest">
//               <ShieldCheck size={14} />
//               Official FYB Package
//             </div>
//           </motion.div>

//           <motion.h2
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className='text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter'
//           >
//             SECURE YOUR <br className='hidden md:block' />
//             <span className='text-[#D97706]'>GRAND MILESTONE.</span>
//           </motion.h2>

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className='text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium'
//           >
//             From the all-inclusive #110k experience to our curated basic plans. 
//             Don&apos;t miss the final celebration of the Genie Clinicus journey.
//           </motion.p>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className='flex flex-col sm:flex-row gap-4 justify-center items-center'
//           >
//             {/* Primary Action */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className='group relative px-10 py-5 bg-[#D97706] text-white rounded-2xl font-black text-lg overflow-hidden transition-all shadow-[0_20px_40px_rgba(217,119,6,0.2)]'
//             >
//               <span className='relative z-10 flex items-center gap-2'>
//                 Get Your Package Now
//                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//               </span>
//               <motion.div className='absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]' />
//             </motion.button>

//             {/* Secondary Action */}
//             <button className='text-slate-300 font-bold hover:text-white transition-colors p-4 text-lg'>
//               Payment Structure →
//             </button>
//           </motion.div>
//         </div>

//         {/* Committee Signature */}
//         <div className='mt-16 pt-8 border-t border-white/5'>
//           <p className='text-[10px] text-[#93A5D1] uppercase tracking-[0.4em] font-black opacity-60'>
//             Genie Clinicus FYB Committee Authorized Portal
//           </p>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// src/components/home/CTA.tsx
'use client'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export default function CTA() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  return (
    <section className='py-20 lg:py-32 px-6 relative overflow-hidden bg-[#0A0927]'>
      
      {/* Background Image with Increased Clarity and Refined Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src="/GC-b.jpeg" // Ensure this is in your public folder
          alt="Genie Clinicus Background"
          fill
          className="object-cover opacity-50" // Increased opacity for a clearer image
          priority
        />
        {/* Subtle gradient overlay to balance clarity with text contrast */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#0A0927]/90 via-[#0A0927]/60 to-[#0A0927]/90' />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        // Increased backdrop-blur to backdrop-blur-lg to maintain readability
        className='max-w-5xl mx-auto bg-white/[0.03] rounded-[2.5rem] p-10 md:p-24 text-center relative overflow-hidden border border-white/10 shadow-2xl backdrop-blur-lg z-10'
      >
        {/* Animated Accent Orb */}
        <div className='absolute -top-24 -right-24 w-64 h-64 bg-[#D97706]/10 blur-[100px] rounded-full' />

        <div className='relative z-10'>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D97706] text-[10px] font-black uppercase tracking-[0.2em]">
              <ShieldCheck size={14} />
              Official FYB Portal
            </div>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1]'
          >
            SECURE YOUR <br className='hidden md:block' />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#f59e0b]'>
              GRAND MILESTONE.
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed'
          >
            Join the class in the ultimate wrap-up. From the exclusive diamond 
            experience to our curated standard plans, ensure your place in the 
            Genie Clinicus legacy.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-5 justify-center items-center'
          >
            {/* Primary Action */}
            <motion.a
              href="#packages"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className='group relative px-10 py-5 bg-[#D97706] text-white rounded-2xl font-black text-sm overflow-hidden transition-all shadow-xl shadow-[#D97706]/20'
            >
              <span className='relative z-10 flex items-center gap-3'>
                Explore Packages
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className='absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-25deg]' />
            </motion.a>

            {/* Secondary Action */}
            <motion.a 
              href="#payment"
              className='text-white/70 font-bold hover:text-white transition-colors p-4 text-sm tracking-tight border-b border-transparent hover:border-[#D97706]'
            >
              View Payment Structure
            </motion.a>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className='mt-20 pt-10 border-t border-white/5'>
          <p className='text-[9px] text-slate-500 uppercase tracking-[0.5em] font-black'>
            Genie Clinicus • Class of 2025 • OAU Med-Rehab
          </p>
        </div>
      </motion.div>
    </section>
  )
}