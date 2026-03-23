import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Footer from '../components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
const syne = Syne({ subsets: ["latin"], variable: '--font-syne' });
const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'IdeaConnect - Student-Professor Mentorship Matching',
  description: 'Connect with professors who share your passion. Get mentorship, validation, and resources for your startup or research idea.',
  generator: 'v0.app',
  icons: {
    icon: 'fav.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm-sans antialiased">
        {children}
         <GoogleAnalytics gaId="G-6HFK2LM5N4" />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
