import Navbar from '@/src/components/layout/Navbar'
import Hero from '@/src/components/home/Hero'
import Events from '@/src/components/home/Events'
import CTA from '@/src/components/home/CTA' 
import FAQ from '@/src/components/home/FAQ'
import Footer from '@/src/components/layout/Footer'

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <CTA />
      <Events />
      <FAQ />
      <Footer />
    </main>
  )
}
