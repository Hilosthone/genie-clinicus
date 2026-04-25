// src/components/home/Packages.tsx
'use client'
import { motion } from 'framer-motion'
import { Check, Crown, Gem, Star, Zap } from 'lucide-react'

const PACKAGES = [
  {
    name: 'Emerald',
    price: '40,000',
    color: '#10B981',
    icon: Star,
    // Pre-filled: Hello Genie Clinicus, my name is [Name]. I want to pay for...
    link: 'https://wa.me/2348074169009?text=Hello%20Genie%20Clinicus%2C%20my%20name%20is%20%5BInsert%20Name%5D.%20I%20want%20to%20pay%20for%20the%20Emerald%20Package%20%28%E2%82%A640%2C000%29.',
    features: [
      'Official Photoshoot & Mountaineering',
      'National Academic Conference Access',
      'Social Service & Premium Magazine',
      'Custom Jersey & Graduation Sash',
      'Amala Day & Cardiofest Entry',
    ],
  },
  {
    name: 'Ruby',
    price: '80,000',
    color: '#EF4444',
    icon: Gem,
    popular: true,
    link: 'https://wa.me/2348074169009?text=Hello%20Genie%20Clinicus%2C%20my%20name%20is%20%5BInsert%20Name%5D.%20I%20want%20to%20pay%20for%20the%20Ruby%20Package%20%28%E2%82%A680%2C000%29.',
    features: [
      'All Emerald Package Benefits',
      'Exclusive FYB Dinner Party Ticket',
      'Custom Aso Oke (Gele/Cap) Set',
      'VIP Premium Event Access',
      'Priority Milestone Seating',
    ],
  },
  {
    name: 'Diamond',
    price: '110,000',
    color: '#7DD3FC',
    icon: Crown,
    link: 'https://wa.me/2348074169009?text=Hello%20Genie%20Clinicus%2C%20my%20name%20is%20%5BInsert%20Name%5D.%20I%20want%20to%20pay%20for%20the%20Diamond%20Package%20%28%E2%82%A6110%2C000%29.',
    features: [
      'All Ruby Package Benefits',
      'All-Inclusive Exclusive FYB Trip',
      'Bespoke Premium Souvenirs',
      'Full Milestone Media Coverage',
      'Elite Alumni Recognition',
    ],
  },
]

export default function Packages() {
  return (
    <section
      id='packages'
      className='py-24 bg-[#0A0927] relative overflow-hidden'
    >
      <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D97706]/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2' />

      <div className='container mx-auto px-6 md:px-12 relative z-10'>
        <div className='text-center max-w-xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4'
          >
            <Zap size={12} className='text-[#D97706]' />
            <span className='text-[#D97706] font-black text-[10px] uppercase tracking-[0.3em]'>
              THE INVESTMENT
            </span>
          </motion.div>
          <h2 className='text-4xl md:text-6xl font-black text-white tracking-tighter'>
            CLASS{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#93A5D1]'>
              PACKAGES.
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative group bg-white/[0.02] backdrop-blur-sm border ${pkg.popular ? 'border-[#D97706]' : 'border-white/10'} rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-white/[0.04] shadow-2xl`}
            >
              {pkg.popular && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D97706] text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-[#D97706]/40'>
                  Recommended
                </div>
              )}

              <div className='flex items-center justify-between mb-8'>
                <div
                  className='w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center'
                  style={{ color: pkg.color, border: `1px solid ${pkg.color}20` }}
                >
                  <pkg.icon size={28} />
                </div>
                <div className='text-right'>
                  <p className='text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1'>
                    Total
                  </p>
                  <p className='text-2xl font-black text-white'>₦{pkg.price}</p>
                </div>
              </div>

              <h3 className='text-3xl font-black text-white mb-6 tracking-tight'>{pkg.name}</h3>

              <div className='space-y-4 mb-10'>
                {pkg.features.map((feature) => (
                  <div key={feature} className='flex items-start gap-3'>
                    <div className='w-5 h-5 rounded-full bg-[#D97706]/10 flex items-center justify-center shrink-0 mt-0.5'>
                      <Check size={12} className='text-[#D97706]' />
                    </div>
                    <span className='text-slate-300 text-sm font-medium leading-relaxed'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                href={pkg.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${pkg.popular ? 'bg-[#D97706] text-white shadow-xl shadow-[#D97706]/20' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
              >
                Pay now for {pkg.name}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className='mt-16 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-md shadow-2xl'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-xl bg-[#D97706]/10 flex items-center justify-center'>
                <Star size={18} className='text-[#D97706]' />
              </div>
              <span className='text-white font-black text-xs uppercase tracking-[0.3em]'>
                Optional Add-ons
              </span>
            </div>
            <div className='flex flex-wrap justify-center gap-y-4 gap-x-12'>
              {[
                { item: 'Varsity Up', price: '₦5k' },
                { item: 'Full Varsity', price: '₦10k' },
                { item: 'Face Cap', price: '₦4k' },
                { item: 'Bucket Hat', price: '₦5k' },
              ].map((extra) => (
                <div
                  key={extra.item}
                  className='flex items-baseline gap-2 group transition-all'
                >
                  <span className='text-slate-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-slate-300'>
                    {extra.item}:
                  </span>
                  <span className='text-white font-black text-sm group-hover:text-[#D97706] transition-colors'>
                    {extra.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}