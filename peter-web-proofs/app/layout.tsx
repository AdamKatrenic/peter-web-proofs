import type { Metadata } from 'next'
import { Oswald, Barlow } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Peter Strechy | Profesionálne strechárske práce',
  description: 'Kvalitné strechárske práce na Slovensku. Realizácie, opravy, nové strechy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className={`${oswald.variable} ${barlow.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}