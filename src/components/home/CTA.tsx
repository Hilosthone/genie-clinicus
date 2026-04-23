// 'use client'
// import { motion } from 'framer-motion'

// export default function CTA() {
//   return (
//     <section id='packages' className='py-24 px-6 relative overflow-hidden'>
//       {/* Background Decorative Element */}
//       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-blue-100/30 blur-[100px] rounded-full -z-10' />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className='max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl'
//       >
//         {/* Animated Background Pattern */}
//         <div className='absolute inset-0 opacity-10 pointer-events-none'>
//           <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent' />
//         </div>

//         <div className='relative z-10'>
//           <motion.h2
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className='text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight'
//           >
//             Ready to secure your <br className='hidden md:block' />
//             <span className='text-blue-400'>Milestone Package?</span>
//           </motion.h2>

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className='text-slate-400 text-lg mb-10 max-w-xl mx-auto'
//           >
//             Whether it&apos;s the all-inclusive #110k experience or the basic
//             trip, don&apos;t miss out on the final celebration.
//           </motion.p>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className='flex flex-col sm:flex-row gap-4 justify-center items-center'
//           >
//             {/* Main Animated Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className='group relative px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]'
//             >
//               <span className='relative z-10'>Get Your Package Now</span>
//               <motion.div className='absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]' />
//             </motion.button>

//             <button className='text-white font-semibold hover:text-blue-400 transition-colors p-4'>
//               View Payment Structure →
//             </button>
//           </motion.div>
//         </div>

//         {/* Footer Trademark inside CTA for authority */}
//         <div className='mt-16 pt-8 border-t border-white/10 opacity-30'>
//           <p className='text-xs text-white uppercase tracking-[0.2em]'>
//             Genie Clinicus FYB Committee Authorized
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

export default function CTA() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  return (
    <section id='packages' className='py-24 px-6 relative overflow-hidden bg-[#0A0927]'>
      {/* Background Decorative Gradient */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[#D97706]/5 blur-[120px] rounded-full -z-10' />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className='max-w-5xl mx-auto bg-white/5 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm'
      >
        {/* Subtle Brand Pattern Overlay */}
        <div className='absolute inset-0 opacity-[0.03] pointer-events-none bg-[url("https://www.transparenttextures.com/patterns/carbon-fibre.png")]' />

        <div className='relative z-10'>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 text-[#D97706] text-xs font-bold uppercase tracking-widest">
              <ShieldCheck size={14} />
              Official FYB Package
            </div>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter'
          >
            SECURE YOUR <br className='hidden md:block' />
            <span className='text-[#D97706]'>GRAND MILESTONE.</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium'
          >
            From the all-inclusive #110k experience to our curated basic plans. 
            Don&apos;t miss the final celebration of the Genie Clinicus journey.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            {/* Primary Action */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='group relative px-10 py-5 bg-[#D97706] text-white rounded-2xl font-black text-lg overflow-hidden transition-all shadow-[0_20px_40px_rgba(217,119,6,0.2)]'
            >
              <span className='relative z-10 flex items-center gap-2'>
                Get Your Package Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div className='absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]' />
            </motion.button>

            {/* Secondary Action */}
            <button className='text-slate-300 font-bold hover:text-white transition-colors p-4 text-lg'>
              Payment Structure →
            </button>
          </motion.div>
        </div>

        {/* Committee Signature */}
        <div className='mt-16 pt-8 border-t border-white/5'>
          <p className='text-[10px] text-[#93A5D1] uppercase tracking-[0.4em] font-black opacity-60'>
            Genie Clinicus FYB Committee Authorized Portal
          </p>
        </div>
      </motion.div>
    </section>
  )
}