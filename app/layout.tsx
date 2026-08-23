import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pranavrbm.com'),
  title: 'Pranav R Bhat | AI & Data Science Engineer',
  description:
    'Portfolio of Pranav R Bhat — AI & Data Science Engineer building end-to-end AI products: RAG systems, LLM pipelines, and full-stack apps. 2x IEEE published researcher.',
  keywords: [
    'Pranav R Bhat',
    'AI Engineer',
    'Data Science',
    'Machine Learning',
    'RAG',
    'LLM',
    'Full-Stack Developer',
  ],
  openGraph: {
    title: 'Pranav R Bhat | AI & Data Science Engineer',
    description:
      'Building end-to-end AI products — RAG systems, LLM pipelines, and full-stack apps. 2x IEEE published researcher.',
    url: 'https://pranavrbm.com',
    siteName: 'pranavrbm.com',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranav R Bhat | AI & Data Science Engineer',
    description:
      'Building end-to-end AI products — RAG systems, LLM pipelines, and full-stack apps. 2x IEEE published researcher.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0d0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
