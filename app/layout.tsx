import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ subsets: ["latin"], variable: '--font-syne' });
const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'IdeaConnect - Student-Professor Mentorship Matching',
  description: 'Connect with professors who share your passion. Get mentorship, validation, and resources for your startup or research idea.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        <Analytics />
      </body>
    </html>
  )
}
