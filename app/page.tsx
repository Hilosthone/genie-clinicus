// src/app/page.tsx
import Navbar from '@/src/components/layout/Navbar'
import Hero from '@/src/components/home/Hero'
import Events from '@/src/components/home/Events'
import Packages from '@/src/components/home/Packages'
import CTA from '@/src/components/home/CTA'
import FAQ from '@/src/components/home/FAQ'
import Footer from '@/src/components/layout/Footer'

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />

      {/* Hero: The Grand Entrance */}
      <Hero />

      {/* CTA: Quick Engagement / Vision */}
      <CTA />

      {/* Events: The Roadmap of Class Activities */}
      <Events />

      {/* Packages: Investment Tiers for the Class of 2025 */}
      <Packages />

      {/* FAQ: Clearing Doubts & Logistics */}
      <FAQ />

      {/* Footer: Contacts, University Branding & Credits */}
      <Footer />
    </main>
  )
}
