// // src/components/home/FAQ.tsx
// 'use client'
// import { useState } from 'react'
// import { motion, AnimatePresence, Variants } from 'framer-motion'
// import { Plus, Minus, HelpCircle } from 'lucide-react'
// import { FAQS } from '@/src/constants'

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null)

//   const accordionVariants: Variants = {
//     hidden: { height: 0, opacity: 0 },
//     visible: {
//       height: 'auto',
//       opacity: 1,
//       transition: { duration: 0.3, ease: 'easeOut' },
//     },
//     exit: {
//       height: 0,
//       opacity: 0,
//       transition: { duration: 0.2, ease: 'easeIn' },
//     },
//   }

//   return (
//     <section id='faq' className='py-24 bg-[#0A0927] relative overflow-hidden'>
//       {/* Subtle Background Glow */}
//       <div className='absolute top-1/2 right-0 w-[30%] h-[30%] bg-[#93A5D1]/5 blur-[120px] rounded-full' />

//       <div className='container mx-auto px-6 relative z-10'>
//         <div className='max-w-3xl mx-auto'>
//           <div className='text-center mb-16'>
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className='flex justify-center mb-4'
//             >
//               <div className='p-3 rounded-2xl bg-white/5 border border-white/10 text-[#D97706]'>
//                 <HelpCircle size={24} />
//               </div>
//             </motion.div>
//             <h2 className='text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter'>
//               Got Questions?
//             </h2>
//             <p className='text-slate-400 font-medium text-lg'>
//               Everything you need to know about the Genie Clinicus FYB Week.
//             </p>
//           </div>

//           <div className='space-y-4'>
//             {FAQS.map((faq, index) => {
//               const isOpen = openIndex === index
//               return (
//                 <div
//                   key={index}
//                   className={`border rounded-[2rem] transition-all duration-500 ${
//                     isOpen
//                       ? 'border-[#D97706]/40 bg-[#D97706]/5 shadow-2xl shadow-orange-900/10'
//                       : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
//                   }`}
//                 >
//                   <button
//                     onClick={() => setOpenIndex(isOpen ? null : index)}
//                     className='w-full flex items-center justify-between p-6 md:p-8 text-left group'
//                   >
//                     <span
//                       className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
//                         isOpen ? 'text-[#D97706]' : 'text-slate-200'
//                       }`}
//                     >
//                       {faq.question}
//                     </span>
//                     <div
//                       className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
//                         isOpen
//                           ? 'bg-[#D97706] text-white rotate-0'
//                           : 'bg-white/5 text-slate-500 group-hover:text-slate-200'
//                       }`}
//                     >
//                       {isOpen ? <Minus size={18} /> : <Plus size={18} />}
//                     </div>
//                   </button>

//                   <AnimatePresence initial={false}>
//                     {isOpen && (
//                       <motion.div
//                         variants={accordionVariants}
//                         initial='hidden'
//                         animate='visible'
//                         exit='exit'
//                         className='overflow-hidden'
//                       >
//                         <div className='px-6 md:px-8 pb-8 text-[#93A5D1] text-lg leading-relaxed font-medium border-t border-white/5 pt-4'>
//                           {faq.answer}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Bottom Support Hint */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className='mt-12 text-center'
//           >
//             <p className='text-slate-500 text-sm font-bold tracking-widest uppercase'>
//               Still confused? Reach out to the PRO directly.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


// src/components/home/FAQ.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { FAQS } from '@/src/constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Parent container variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  // Individual item variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1.0] } // Out-cubic for smooth deceleration
    }
  }

  const accordionVariants: Variants = {
    hidden: { height: 0, opacity: 0, scale: 0.98 },
    visible: {
      height: 'auto',
      opacity: 1,
      scale: 1,
      transition: { 
        height: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2, delay: 0.1 }
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      scale: 0.98,
      transition: { 
        height: { duration: 0.3 },
        opacity: { duration: 0.15 }
      },
    },
  }

  return (
    <section id='faq' className='py-24 bg-[#0A0927] relative overflow-hidden'>
      {/* Subtle Background Glow */}
      <div className='absolute top-1/2 right-0 w-[30%] h-[30%] bg-[#93A5D1]/5 blur-[120px] rounded-full' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className='flex justify-center mb-4'
            >
              <div className='p-3 rounded-2xl bg-white/5 border border-white/10 text-[#D97706]'>
                <HelpCircle size={24} />
              </div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className='text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter'
            >
              Got Questions?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='text-slate-400 font-medium text-lg'
            >
              Everything you need to know about the Genie Clinicus FYB Week.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className='space-y-4'
          >
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  layout // This handles smooth movement of items when one expands
                  className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? 'border-[#D97706]/40 bg-[#D97706]/5 shadow-2xl shadow-orange-900/10'
                      : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className='w-full flex items-center justify-between p-6 md:p-8 text-left group outline-none'
                  >
                    <span
                      className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                        isOpen ? 'text-[#D97706]' : 'text-slate-200'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#D97706] text-white'
                          : 'bg-white/5 text-slate-500 group-hover:text-slate-200'
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        variants={accordionVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className='overflow-hidden'
                      >
                        <div className='px-6 md:px-8 pb-8 text-[#93A5D1] text-lg leading-relaxed font-medium border-t border-white/5 pt-4'>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom Support Hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='mt-12 text-center'
          >
            <p className='text-slate-500 text-sm font-bold tracking-widest uppercase'>
              Still confused? Reach out to the PRO directly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}