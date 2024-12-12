import type { Metadata } from 'next'
import { Poppins, Rubik } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { siteConfig } from './page'
import { GoogleAnalytics } from '@next/third-parties/google'
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
})
const rubik = Rubik({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.byte.ink'),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: ['Junexus', 'portfolio', 'web developer', 'web', 'web dev', 'developer', 'PROGRAMMER ', 'programmer ', 'website'],
  authors: [
    {
      name: 'Taqui Imam',
      url: 'https://github.com/taqui-786',
    },
  ],
  creator: 'Taqui imam',

  openGraph: {
    type: 'website',
    locale: 'zh-CN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: '@Taquiimam14',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <Navbar />
        <main
          className={cn(
            'flex flex-col relative break-words min-h-screen pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]',
            { 'bg-white': '#E6E7EB' }
          )}
        >
          {children}
        </main>
      </body>
      <GoogleAnalytics gaId='G-40820HPGL6' />
    </html>
  )
}
