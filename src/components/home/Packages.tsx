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
    features: [
      'Photoshoot & Mountaineering',
      'Academic Conference',
      'Social Service & Magazine',
      'Jersey & Sash Included',
      'Amala Day & Cardiofest',
    ],
  },
  {
    name: 'Ruby',
    price: '80,000',
    color: '#EF4444',
    icon: Gem,
    popular: true,
    features: [
      'Everything in Emerald',
      'FYB Dinner Party',
      'Aso Oke (Gele/Cap)',
      'Premium Event Access',
    ],
  },
  {
    name: 'Diamond',
    price: '100,000',
    color: '#7DD3FC',
    icon: Crown,
    features: [
      'Everything in Ruby',
      'Exclusive FYB Trip',
      'Special Souvenirs',
      'Full Milestone Coverage',
    ],
  },
]

export default function Packages() {
  return (
    <section
      id='packages'
      className='py-16 bg-[#0A0927] relative overflow-hidden'
    >
      <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D97706]/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-xl mx-auto mb-12'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3'
          >
            <Zap size={10} className='text-[#D97706]' />
            <span className='text-[#D97706] font-black text-[9px] uppercase tracking-widest'>
              The Investment
            </span>
          </motion.div>
          <h2 className='text-3xl md:text-4xl font-black text-white tracking-tighter mb-4'>
            Class{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#93A5D1]'>
              Packages.
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-white/[0.02] border ${pkg.popular ? 'border-[#D97706]/40' : 'border-white/5'} rounded-3xl p-6 hover:bg-white/[0.04] transition-all duration-500`}
            >
              {pkg.popular && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D97706] text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest'>
                  Recommended
                </div>
              )}

              <div className='flex items-center justify-between mb-6'>
                <div
                  className='p-2.5 rounded-xl bg-white/5'
                  style={{ color: pkg.color }}
                >
                  <pkg.icon size={20} />
                </div>
                <div className='text-right'>
                  <p className='text-slate-500 text-[9px] font-black uppercase tracking-widest'>
                    Total
                  </p>
                  <p className='text-xl font-black text-white'>₦{pkg.price}</p>
                </div>
              </div>

              <h3 className='text-xl font-black text-white mb-4'>{pkg.name}</h3>

              <div className='space-y-3 mb-8'>
                {pkg.features.map((feature) => (
                  <div key={feature} className='flex items-start gap-2.5'>
                    <Check
                      size={12}
                      className='text-[#D97706] mt-0.5 shrink-0'
                    />
                    <span className='text-slate-400 text-[11px] font-medium leading-tight'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${pkg.popular ? 'bg-[#D97706] text-white' : 'bg-white/5 text-white border border-white/10'}`}
              >
                Select {pkg.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Compressed Extras Bar */}
        <div className='mt-10 bg-white/[0.02] border border-white/5 rounded-2xl p-5'>
          <div className='flex flex-wrap justify-between items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Star size={14} className='text-[#D97706]' />
              <span className='text-white font-black text-[10px] uppercase tracking-widest'>
                Optional Add-ons
              </span>
            </div>
            <div className='flex flex-wrap gap-6'>
              {[
                { item: 'Varsity Up', price: '₦5k' },
                { item: 'Full Varsity', price: '₦10k' },
                { item: 'Face Cap', price: '₦4k' },
                { item: 'Bucket Hat', price: '₦5k' },
              ].map((extra) => (
                <div
                  key={extra.item}
                  className='flex items-baseline gap-2 border-l border-white/10 pl-4'
                >
                  <span className='text-slate-500 text-[9px] font-bold uppercase'>
                    {extra.item}:
                  </span>
                  <span className='text-white font-black text-[11px]'>
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
