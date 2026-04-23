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
      'Class Photoshoot',
      'Fitness Walk & Mountaineering',
      'Academic Conference',
      'Social Service',
      'Merchandise (Jersey/Sash)',
      'Amala Day & Cardiofest',
      'Magazine',
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
      'FYB Trip',
      'Exclusive Souvenirs',
      'Full Milestone Coverage',
    ],
  },
]

export default function Packages() {
  return (
    <section
      id='packages'
      className='py-24 bg-[#0A0927] relative overflow-hidden'
    >
      {/* Background Decorative Element */}
      <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D97706]/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4'
          >
            <Zap size={12} className='text-[#D97706]' />
            <span className='text-[#D97706] font-black text-[10px] uppercase tracking-widest'>
              The Investment
            </span>
          </motion.div>
          <h2 className='text-4xl md:text-5xl font-black text-white tracking-tighter mb-6'>
            Choose Your{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#93A5D1]'>
              Experience.
            </span>
          </h2>
          <p className='text-slate-400 text-sm font-medium leading-relaxed'>
            Carefully structured packages designed to ensure every member of
            Genie Clinicus enjoys a memorable final stretch within a realistic
            and sustainable budget.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-white/[0.02] border ${pkg.popular ? 'border-[#D97706]/30' : 'border-white/5'} rounded-[2.5rem] p-8 hover:bg-white/[0.04] transition-all duration-500`}
            >
              {pkg.popular && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D97706] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl shadow-[#D97706]/20'>
                  Most Popular
                </div>
              )}

              <div className='flex items-center justify-between mb-8'>
                <div
                  className='p-3 rounded-2xl bg-white/5'
                  style={{ color: pkg.color }}
                >
                  <pkg.icon size={24} />
                </div>
                <div className='text-right'>
                  <p className='text-slate-500 text-[10px] font-black uppercase tracking-widest'>
                    Starting At
                  </p>
                  <p className='text-2xl font-black text-white'>₦{pkg.price}</p>
                </div>
              </div>

              <h3 className='text-2xl font-black text-white mb-6'>
                {pkg.name} Package
              </h3>

              <div className='space-y-4 mb-10'>
                {pkg.features.map((feature) => (
                  <div
                    key={feature}
                    className='flex items-start gap-3 group/item'
                  >
                    <div className='mt-1 w-4 h-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-[#D97706]/50 transition-colors'>
                      <Check size={10} className='text-[#D97706]' />
                    </div>
                    <span className='text-slate-400 text-xs font-medium group-hover/item:text-slate-200 transition-colors'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-[#D97706] text-white hover:bg-[#B45309] shadow-lg shadow-[#D97706]/20'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Select {pkg.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Optional Add-ons Section */}
        <div className='mt-16 bg-white/[0.01] border border-white/5 rounded-[2rem] p-8'>
          <h4 className='text-white font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2'>
            <Star size={16} className='text-[#D97706]' />
            Optional Extras & Merch
          </h4>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {[
              { item: 'Varsity Upgrade', price: '₦5k' },
              { item: 'Varsity Jacket', price: '₦10k' },
              { item: 'Face Cap', price: '₦4k' },
              { item: 'Bucket Hat', price: '₦5k' },
            ].map((extra) => (
              <div key={extra.item} className='border-l border-white/10 pl-4'>
                <p className='text-slate-500 text-[10px] font-bold uppercase'>
                  {extra.item}
                </p>
                <p className='text-white font-black text-sm'>{extra.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
