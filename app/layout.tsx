import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700', '800', '900'],
})

// Viewport settings for mobile responsiveness and theme color
export const viewport: Viewport = {
  themeColor: '#D97706',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Genie Clinicus | FYB 2025 Milestone',
    template: '%s | Genie Clinicus',
  },
  description:
    'The official milestone platform for the Genie Clinicus Final Year Class. Celebrating the journey, the sacrifice, and the medical excellence of the 2025 graduates.',
  keywords: [
    'Genie Clinicus',
    'Medical Rehabilitation',
    'FYB 2025',
    'Unilorin',
    'Graduation',
  ],
  authors: [{ name: 'Genie Clinicus Committee' }],
  metadataBase: new URL('https://genie-clinicus.vercel.app'),

  // Open Graph (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: 'Genie Clinicus | The Grand Milestone',
    description:
      'Celebrating the legacy and the journey of our final year in Medical Rehabilitation.',
    url: 'https://genie-clinicus.vercel.app',
    siteName: 'Genie Clinicus',
    images: [
      {
        url: '/GClogo.jpeg',
        width: 800,
        height: 800,
        alt: 'Genie Clinicus Official Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter (X)
  twitter: {
    card: 'summary_large_image',
    title: 'Genie Clinicus | FYB 2025',
    description: 'Celebrating the Grand Milestone of our Medical Journey.',
    images: ['/GClogo.jpeg'],
  },

  // Favicons
  icons: {
    icon: '/GClogo.jpeg',
    shortcut: '/GClogo.jpeg',
    apple: '/GClogo.jpeg',
  },
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
