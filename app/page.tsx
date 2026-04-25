// // src/app/page.tsx
// import Navbar from '@/src/components/layout/Navbar'
// import Hero from '@/src/components/home/Hero'
// import Events from '@/src/components/home/Events'
// import Packages from '@/src/components/home/Packages'
// import CTA from '@/src/components/home/CTA'
// import Gallery from '@/src/components/home/Gallery'
// import FAQ from '@/src/components/home/FAQ'
// import Footer from '@/src/components/layout/Footer'

// export default function Home() {
//   return (
//     <main className='relative'>
//       <Navbar />

//       {/* Hero: The Grand Entrance */}
//       <Hero />

//       {/* CTA: Quick Engagement / Vision */}
//       <CTA />

//       {/* Events: The Roadmap of Class Activities */}
//       <Events />

//       {/* Packages: Investment Tiers for the Class of 2025 */}
//       <Packages />

//       <Gallery />

//       {/* FAQ: Clearing Doubts & Logistics */}
//       <FAQ />

//       {/* Footer: Contacts, University Branding & Credits */}
//       <Footer />
//     </main>
//   )
// }



// src/app/page.tsx
import Navbar from '@/src/components/layout/Navbar'
import Hero from '@/src/components/home/Hero'
import Events from '@/src/components/home/Events'
import Packages from '@/src/components/home/Packages'
import CTA from '@/src/components/home/CTA'
import Gallery from '@/src/components/home/Gallery'
import FAQ from '@/src/components/home/FAQ'
import Footer from '@/src/components/layout/Footer'

export default function Home() {
  return (
    <main className='relative bg-[#0A0927] min-h-screen overflow-x-hidden'>
      {/* Global Background Glows: 
        These provide a subtle depth that carries through the scroll 
      */}
      <div className='fixed inset-0 pointer-events-none z-0'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D97706]/5 blur-[120px] rounded-full' />
        <div className='absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#93A5D1]/5 blur-[100px] rounded-full' />
      </div>

      <Navbar />

      <div className='relative z-10'>
        {/* Hero: The Grand Entrance */}
        <Hero />

        {/* CTA: Quick Engagement / Vision */}
        <CTA />

        {/* Events: The Roadmap of Class Activities */}
        <Events />

        {/* Packages: Investment Tiers for the Class of 2025 */}
        {/* Now the primary target for 'Secure Merch' links */}
        <Packages />

        {/* Gallery: Visualizing the Memories */}
        <Gallery />

        {/* FAQ: Clearing Doubts & Logistics */}
        <FAQ />

        {/* Footer: Contacts, University Branding & Credits */}
        <Footer />
      </div>
    </main>
  )
}
