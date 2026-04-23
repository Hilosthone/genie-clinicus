// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import GClogo from '@/src/components/home/images/GClogo.jpeg'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Smoother font loading
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700', '800', '900'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0A0927', // Set this to your background color for seamless status bars
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Prevents accidental zoom on mobile inputs
}

export const metadata: Metadata = {
  title: {
    default: 'Genie Clinicus | OAU Med-Rehab FYB 2025',
    template: '%s | Genie Clinicus',
  },
  description:
    'The official milestone platform for the Genie Clinicus Final Year Class, Dept. of Medical Rehabilitation, Obafemi Awolowo University. Celebrating medical excellence.',
  keywords: [
    'Genie Clinicus',
    'Medical Rehabilitation',
    'FYB 2025',
    'OAU',
    'Obafemi Awolowo University',
    'Physiotherapy',
    'Occupational Therapy',
    'Graduation',
  ],
  authors: [{ name: 'Genie Clinicus Committee' }],
  creator: 'Genie Clinicus Committee',
  publisher: 'Obafemi Awolowo University',
  metadataBase: new URL('https://genie-clinicus.vercel.app'),

  openGraph: {
    title: 'Genie Clinicus | The Grand Milestone',
    description:
      'Celebrating the legacy and the journey of our final year in Medical Rehabilitation at OAU.',
    url: 'https://genie-clinicus.vercel.app',
    siteName: 'Genie Clinicus',
    images: [
      {
        url: GClogo.src,
        width: 1200, // Standard OG size
        height: 630,
        alt: 'Genie Clinicus Official Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Genie Clinicus | FYB 2025',
    description: 'Celebrating the Grand Milestone of our Medical Journey.',
    images: [GClogo.src],
  },

  icons: {
    icon: [
      { url: GClogo.src },
      { url: GClogo.src, sizes: '32x32', type: 'image/jpeg' },
    ],
    shortcut: GClogo.src,
    apple: [{ url: GClogo.src, sizes: '180x180', type: 'image/jpeg' }],
  },

  // Optional: Add this if you create a manifest.json in /public
  // manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-[#0A0927] text-white overflow-x-hidden`}
      >
        {/* Main Content Wrapper */}
        <div className='relative flex min-h-screen flex-col'>{children}</div>

        {/* Global Vertical Brand Stamp */}
        <div className='fixed bottom-8 left-6 z-[9999] pointer-events-none md:block hidden'>
          <p
            className='text-[9px] font-black text-white/20 uppercase tracking-[0.5em]'
            style={{ writingMode: 'vertical-rl' }}
          >
            GC-FYB-2025
          </p>
        </div>
      </body>
    </html>
  )
}
